# Test Frontend - ReactJS

The purpose is to implement a small app displaying prices to the user.
The code must be submitted via git, each functionnal milestone being commited to *master*, and the final result being the last commit on *master*.
Developments must be done in *develop*

## Ressources

Mocked data:

* http://5ae97684531a58001414278c.mockapi.io/:endpoint

Endpoints (CRUD pour chacune des routes):

* /agencies
    * GET: Returns the list of agencies
* /agencies/:id/categories
    * GET: Returns the list of products related to the [:id] specific agency
* /agencies/[:agency_id]/categories/[:product_id]/prices
    * GET: Given a specific agency [:agency_id] and a product [:product_id], return the list of prices

A price object is as below:
{
  "startDate": number (EPOCH),
  "price": number,
  "suggestedPrice": number,
  "isValidated": true/false,
}

The mocked data is provided through a third party service which may result in random downtimes.
If there is too much problems, the candidate may creates its own relevant mocked data.

## Description

The main elements of the interface are:

* A dropdown to select agencies
* A dropdown to select products
* A toggle button: "Show all Y/N" that allowqui permet de voir seulement les prix validés (par défaut), ou tous
* A price list:
    * Sorted by ascending startDate (EPOCH)
    * Filtered on the criteria isValidated
    * Each line displaying at least the information Chaque ligne affiche: prix: XX, prix suggéré: YY

## Difficulty

The main objective is to develop the interface, but the candidate is free to add features and increase the challenge.
For example:
* Good practices (Linter Airbnb, Unit Testing, Snapshot Testing, ...)
* Use of Redux, using ducks (https://github.com/alexnm/re-ducks)
* Dynamic ordering of the table component
* Translation using react-18next
* ...
 