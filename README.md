## REACT APPLICATION TO DISPLAY RANDOM BEERS AND THEIR REGARDING BREWERIES

### TECHNOLOGIES

- **CREATE-REACT-APP**
- **YARN**
- **REACT HOOKS**
- **MATERIAL-UI**
- **AXIOS**

### DEVELOPMENT

First, I used CREATE-REACT-APP for the scaffolding of this project, YARN for installing packages and REACT as framework.

Regarding to development, I implemented three main components:

- APP: Parent component which is in charge of handling the logic related to using the services to get beer and brewery data
  and showing main or brewery detail screen.
- MAINSCREEN: Children component of App which shows random beer data.
- BREWERYSCREEN: Children component of App which shows specific brewery data.

On the other hand, I implemented small core components such as Button, Link, Description and Title. They are used in Main and Brewery screen.

To implement services, I used Axios library.

Regarding to styles I used MATERIAL-UI (as components library) and CSS.

### CORS

Using this database [BREWERYDB](https://www.brewerydb.com/developers/docs/endpoint/beer-index) I faced CORS issues. To solve it I used this chrome extension [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
