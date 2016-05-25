/**
  * @module MarvelComicsLib
  *  
  * Marvel Comics API SDK
  */

var configuration = require('./configuration'),
    CharactersController = require('./Controllers/CharactersController'),
    ComicsController = require('./Controllers/ComicsController'),
    CreatorsController = require('./Controllers/CreatorsController'),
    EventsController = require('./Controllers/EventsController'),
    SeriesController = require('./Controllers/SeriesController'),
    StoriesController = require('./Controllers/StoriesController'),
    FormatTypeEnum = require('./Models/FormatTypeEnum'),
    DateDescriptorEnum = require('./Models/DateDescriptorEnum');


function initializer(){}

//Main functional components of MarvelComicsLib
initializer.configuration = configuration;
initializer.CharactersController = CharactersController;
initializer.ComicsController = ComicsController;
initializer.CreatorsController = CreatorsController;
initializer.EventsController = EventsController;
initializer.SeriesController = SeriesController;
initializer.StoriesController = StoriesController;

//Main Models of MarvelComicsLib
initializer.FormatTypeEnum = FormatTypeEnum;
initializer.DateDescriptorEnum = DateDescriptorEnum;

module.exports = initializer;