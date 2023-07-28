import json
from bs4 import BeautifulSoup


with open("manifest.json", "r") as f:
    data = json.load(f)

data["files"] = list(sorted(data["files"], key=lambda x: x["projectID"]))

with open("manifest.json", "w") as f:
    json.dump(data, f, indent=2)

with open("modlist.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, features="html.parser")

ul = soup.find("ul")
items = [li.extract() for li in ul.find_all("li")]
items.sort(key=lambda e: e.string)
for linebreak, li in reversed(list(zip(ul.contents, items))):
    linebreak.insert_after(li)

with open("modlist.html", "w", encoding="utf-8") as f:
    f.write(str(soup))
