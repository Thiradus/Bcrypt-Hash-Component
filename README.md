<div align="center">

[![Thiradus Dark Banner](https://raw.githubusercontent.com/Thiradus/Branding/master/Graphics/Banner/Banner-Dark.png)](https://thiradus.com/)

<h2>Bcrypt Hash Component</h2>

[![CodeFactor](https://www.codefactor.io/repository/github/thiradus/bcrypt-hash-component/badge)](https://www.codefactor.io/repository/github/thiradus/bcrypt-hash-component) [![Depfu](https://badges.depfu.com/badges/369e44080263788a87255d681ab010db/overview.svg)](https://depfu.com/github/Thiradus/Bcrypt-Hash-Component?project_id=11421) ![Downloads](https://img.shields.io/npm/dt/bcrypt-hash-component?style=flat) ![MIT License](https://img.shields.io/github/license/Thiradus/bcrypt-hash-component?style=flat)

</div>

## Overview

An easy-to-use module that generates and validates [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/) hashes.

## Installation

```Bash
npm install bcrypt-hash-component --save
```

## Usage

### Example

```JavaScript
const hash = require('bcrypt-hash-component');

const myEpicPassword = 'letmein';

const hashedPassword = hash.generate(myEpicPassword);

hash.validate(myEpicPassword, hashedPassword); // Returns true

```

## License

This repository is licensed under the [MIT](./LICENSE.md) License &copy; 2015-2020 [Thiradus](https://github.com/Thiradus/)
