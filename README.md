# JSON GROUP BY

Group your JSON data by similer value

## Installation

Install my-project with npm

```bash
 npm i group-json-by-key

```

## Usage/Examples

```javascript
import group from "group-json-by-key";
```

## Raw Data

![App Screenshot](https://iili.io/HgWCnwl.md.png)

```javascript
group(user).bySame("role");
```

![App Screenshot](https://i.ibb.co/BCYzMsx/carbon-1.png)

```javascript
group(user).bySame("address.city");
```

![App Screenshot](https://i.ibb.co/Wf85Hjv/carbon-2.png)
