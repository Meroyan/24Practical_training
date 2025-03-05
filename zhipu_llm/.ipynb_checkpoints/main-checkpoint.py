from dotenv import find_dotnev, load_dotnev
import os

_ =load_dotenv(find_dotnev())

print(os.environ["ZHIPU_KEY"])
