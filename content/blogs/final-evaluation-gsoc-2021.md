---
title: "GSoC’21 Final Evaluation - Python Honeypot @ OWASP"
date: "2021/08/18"
author: "Mrigank Anand"
readTime: "6"
image: "image.jpg"
coverImage: "cover1.png"
tags: ["Final Evaluation", "GSoC 2k21", "OWASP", "Python Honeypot"]
isFeatured: true
---

## Introduction

OWASP Honeypot framework helps you to automate and initialize your own honeypot/deception service using docker
containers in a very easy and secure way, This project has several built-in modules, and multiple functionalities to add
your own new modules based on your needs.



You can more details about my project from
here : [Project Details](https://summerofcode.withgoogle.com/projects/#4753249262895104)


## My work

### Web Console

> Added new features to the web console.
>  - Download Charts
> - Internationalization Support
> - Proper error handling in log explorer
> - Bulk export (all records can be exported for selected options). Data can be exported to multiple formats.
> > - JSON
> > - Excel
> > - CSV

### API’s

> Migrated REST API’s from mongodb to elasticsearch. Adding scroll in explore api to retrieve all records from elasticsearch based on user query.

### Documentation

> Proper documentation for API added with configuration for swagger which helps in testing API’s using web easily. Also updated the documentation of the project and readme where changes where necessary based on migration from mongodb to elasticsearch.
> Moreover, API documentation can easily be imported to Postman.

> > - Steps
> > - Run Api Server
> > - Open Postman
> > - Choose Import
> > - Enter the following link under link tab http://localhost:5000/docs-configuration
> > - Click on import
> > - API’s are ready to test.

### Internationalization

> I added support for multiple languages in Web Console and CLI with translations currently added for 5 languages.
> > - es_ES (Spanish)
> > - ru_RU (Russian)
> > - en_US (English)
> > - fr_FR (French)
> > - de_DE (German)

### Unit tests

> Added new tests and updated old one’s after shifting database from mongodb to elasticsearch and adding multi language support.

### Templates

> Added new templates for Pull Request and Issue

## Links to my Work in GSOC'2k21 Period

- [Refactor javascript code](https://github.com/OWASP/Python-Honeypot/pull/333)
- [Adding and updating tests](https://github.com/OWASP/Python-Honeypot/pull/329)
- [Adding scroll in api’s](https://github.com/OWASP/Python-Honeypot/pull/320)
- [Adding internationalization](https://github.com/OWASP/Python-Honeypot/pull/315)
- [Fix error cannot connect to elasticsearch](https://github.com/OWASP/Python-Honeypot/pull/321)
- [Fix requirement checking code](https://github.com/OWASP/Python-Honeypot/pull/322)
- [Swagger style documentation for api](https://github.com/OWASP/Python-Honeypot/pull/311)
- [Pr Template](https://github.com/OWASP/Python-Honeypot/pull/304)
- [Fix all record count](https://github.com/OWASP/Python-Honeypot/pull/303)
- [Download chart functionality](https://github.com/OWASP/Python-Honeypot/pull/299)
- [Improve error handling in log explorer](https://github.com/OWASP/Python-Honeypot/pull/293)
- [Adding bulk export](https://github.com/OWASP/Python-Honeypot/pull/292)
- [Update Api’s (migrating to elasticsearch)](https://github.com/OWASP/Python-Honeypot/pull/289)
- [Update docs and readme](https://github.com/OWASP/Python-Honeypot/pull/290)
- [Fix issue when 0 log records are returned from the api](https://github.com/OWASP/Python-Honeypot/pull/282)
- [Fix minor bug in chart colors](https://github.com/OWASP/Python-Honeypot/pull/283)

## Wiki

Updated wiki with information about latest features of the project.

- [https://github.com/OWASP/Python-Honeypot/wiki/Setup-and-Installation](https://github.com/OWASP/Python-Honeypot/wiki/Setup-and-Installation)
- [https://github.com/OWASP/Python-Honeypot/wiki/Available-Modules](https://github.com/OWASP/Python-Honeypot/wiki/Available-Modules)
- [https://github.com/OWASP/Python-Honeypot/wiki/Usage](https://github.com/OWASP/Python-Honeypot/wiki/Usage)
- [https://github.com/OWASP/Python-Honeypot/wiki/Developer-Guidelines](https://github.com/OWASP/Python-Honeypot/wiki/Developer-Guidelines)
- [https://github.com/OWASP/Python-Honeypot/wiki/API](https://github.com/OWASP/Python-Honeypot/wiki/API)
- [https://github.com/OWASP/Python-Honeypot/wiki/Database](https://github.com/OWASP/Python-Honeypot/wiki/Database)
- [https://github.com/OWASP/Python-Honeypot/wiki/How-to-Contribute](https://github.com/OWASP/Python-Honeypot/wiki/How-to-Contribute)

Here one can find all the commits done for the GSOC
work: [here](https://github.com/OWASP/Python-Honeypot/pulls?q=is%3Apr+author%3Aspiderxm+is%3Amerged)

## Acknowledgment

I am very thankful to my mentors [Ali Razmjoo](https://github.com/Ali-Razmjoo)
and [Dhiren Serai](https://github.com/dhirensr). Without them, the work never would have been this joyful and rewarding.
Both were always available to answer my questions on time. I love the OWASP community for its welcoming and enthusiastic
nature. Finally, thanks to the GSoC program, without which, I wouldn’t be a part of this awesome project and gain this
memorable experience. I am thankful to them for creating this kind of opportunity for students. I am grateful and love
to contribute more in open source.

Final thanks to Google for organizing this amazing program. I feel GSoC made it easier for me to get started with open
source contributions. It was a great lesson on how projects are built and maintained with great quality. I am excited to
continue contributing to the open-source community.

## Singing off

So with this I am done with my blog post for GSoC evaluation. But the journey will go on. I will continue to contribute
in the project after the GSoC as well and all the bugs if occurs. Work on code reviews and new features. Now, I will
come back with new update in my project if I got a chance.

Bye