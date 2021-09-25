---
layout: post
title: Use SchemaSpy to analyze an SQLite database
tags: schemaspy, sqlite, windows
---

[SchemaSpy](https://schemaspy.org/) is a Java-based command line program for database analysis. 

This allows you to quickly and easily document the tables, columns and relations of a database.

Download [SQLite JDBC Driver](https://github.com/xerial/sqlite-jdbc/releases/tag/3.36.0.3) and install [GraphViz](https://graphviz.gitlab.io/download/#windows).

Open a terminal and run:

```
java -jar schemaspy-6.1.0.jar -t sqlite-xerial -dp sqlite-jdbc-3.36.0.3.jar -db places.sqlite -u root -o output -cat % -s database
```

Open "output/index.html".
