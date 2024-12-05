from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument("--headless=new")

driver = webdriver.Chrome(options=options)
driver.get('https://objectwriting.com/')
content = driver.page_source
print(content)
driver.quit()

