import { Hono } from "hono";

import { jwt, sign, verify} from 'hono/jwt'
import { signUpInput, email, signInInput } from "senseboundtypes";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { JwtTokenExpired } from "hono/utils/jwt/types";



interface Bindings {
    DATABASE_URL : string
    JWT_SECRET : string
}

const user = new Hono<{
    Bindings: Bindings
}>();

// show all users

user.get('/', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const users = await prisma.user.findMany();
    
    return c.json({
        data: users
    })


});



// signup route
user.post('/signup', async (c) => {
    
    const body = await c.req.json()
    const {success} = signUpInput.safeParse(body);
  
    
    if(!success){
        c.status(411);
        return c.json({
            "message": "Invalid Inputs!"
        })

    } 

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{

        const date  = new Date(Date.now()).toISOString();

       
        const newUser = await prisma.user.create({
            data:{
                email: body.email,
                username: body.username,
                password_hash: body.password_hash,
                join_date: date
            }
        })


        const token = await sign({
            id: newUser.id
        }, c.env.JWT_SECRET)

        return c.json({
            token: token
        })

       
        
    } catch(e){
        console.log(e)
    }
    
    

    
})


// signin route
user.post('/signin', async (c) => {
    
    const body =  await c.req.json();
    
    const success = signInInput.safeParse(body);
    
    const isEmail = email.safeParse(body.user)


    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    
   
    const user = isEmail.success 
    ? await prisma.user.findUnique({
        where: {
            email: body.user,
            password_hash : body.password
        }
    })
    :  await prisma.user.findUnique({
            where: {
                username: body.user,
                password_hash: body.password
            }
        })

    if(!user){

        c.status(404);
        return c.json({
            "message": "Invalid Credentials."
        })

    }

    const token = await sign({
        id: user.id
    }, c.env.JWT_SECRET)
    

    return c.json({
        token: token
       
    })

});

user.post('/password-reset', async (c)=>{

    const body = await c.req.json()
    

    const isEmail = email.safeParse(body.email)

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const user = isEmail.success && (
        await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
    )

    console.log(user)

    if(!user){

        return c.json({
            message: "This user does not exist."
        })
    }

    const token = await sign(
        {email: body.email}, 
        c.env.JWT_SECRET,
        
    )

    
    
    const response = await prisma.resetTokens.create({
        data:{
            user_id: String(user.id),
            email: user.email,
            token: token
        }
    });
    

    return c.json({
        response
    })

})


user.post('/password-reset/:userId/:token', async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId = c.req.param("userId");
    const token =  c.req.param("token");

    // model ResetTokens {
    //     id          Int @id @default(autoincrement())
    //     user        User @relation(fields: [user_id], references: [id], onDelete: Cascade)
    //     user_id     String 
    //     email       String
    //     token       String
    //   }

    const checkToken = await prisma.resetTokens.findFirst({
        where:{
            user_id: userId,
            token: token
        }       
    })

    if(!checkToken){

        return c.json({
            check: false
        })
    }

    const deletedToken = await prisma.resetTokens.deleteMany({
        where:{
            token: token
        }
    })

    return c.json(
        {
            user_id: checkToken.user_id,
            check: true
        }
    )


    
    
})

user.put("/update-password/:userid", async (c)=>{
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const userId = c.req.param("userid")

    interface newPassword {
        password: string
    }

    const body : newPassword = await c.req.json()

    const update = await prisma.user.update({
        where:{
            id: userId
        },
        data:{
            password_hash: body.password
        }
    })

    if(!update){

        return c.json(
            {
                password: false
            }
        )
    }

    return c.json({
        password: true
    })
})

// do not use in production 
user.delete("/deleteAllUsers", async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());


    const deleteUsers = await prisma.user.deleteMany({});


    return c.json({
        "message": deleteUsers
    })


});


user.delete('/deleteTokens', async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());


    const deleteTokens = await prisma.resetTokens.deleteMany({});

    return c.json({
        deleteTokens
    })
})





export default user;