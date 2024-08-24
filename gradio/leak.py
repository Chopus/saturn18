import requests

data = {"token":"597044843:u0FhbrUJ", "request":"6283879629360", "limit": 100, "lang":"en"} 
url = 'https://server.leakosint.com/' 
response = requests.post(url, json=data) 
print(response.json())