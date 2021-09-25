---
layout: post
title: Use SchemaSpy to analyze an SQLite database
tags: schemaspy, sqlite, windows, firefox
---

I'm using Windows here.

I know that Firefox safe the bookmarks and history in the "places.sqlite".

I know it is an SQLite database and I wanted to know how the tables are related to each other.

After searching the internet I found [SchemaSpy](https://schemaspy.org/).

SchemaSpy is a Java-based command line program for database analysis and visualization. 

If you want to use it, you need to download [SchemaSpy](https://github.com/schemaspy/schemaspy/releases/download/v6.1.0/schemaspy-6.1.0.jar), the [SQLite JDBC Driver](https://github.com/xerial/sqlite-jdbc/releases/tag/3.36.0.3) and install [GraphViz](https://graphviz.gitlab.io/download/#windows).

When done, open a terminal and run:

```
java -jar schemaspy-6.1.0.jar -t sqlite-xerial -dp sqlite-jdbc-3.36.0.3.jar -db places.sqlite -u root -o output -cat % -s database
```

That generates a website into `output`. Open `output\index.html` and explore the site.

Some screenshots of the result:

![SchemaSpy - All Relationships](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/images/schemaspy-places-sqlite-relationships.png)

![SchemaSpy - Utility Tables](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/images/schemaspy-places-sqlite-orphan-tables.png)
