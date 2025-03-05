from dotenv import find_dotenv, load_dotenv
import os

_ =load_dotenv(find_dotenv())

print(os.environ["ZHIPU_KEY"])
