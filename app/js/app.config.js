'use strict';
//Define the application global configuration
angular.module('snorql.config', []).factory('config', [
    function () {

         var namespacePrefixes={
            owl:'http://www.w3.org/2002/07/owl#',
            xsd:'http://www.w3.org/2001/XMLSchema#',
            rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
            rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            foaf: 'http://xmlns.com/foaf/0.1/',
            geo:'http://www.w3.org/2003/01/geo/wgs84_pos#',
            dc: 'http://purl.org/dc/elements/1.1/',
            '': 'http://dbpedia.org/resource/',
            dbpedia2: 'http://dbpedia.org/property/',
            dbpedia: 'http://dbpedia.org/',
            skos: 'http://www.w3.org/2004/02/skos/core#',
            category: 'http://dbpedia.org/resource/Category:',
            dcterms: 'http://purl.org/dc/terms/',
            ontology: 'http://dbpedia.org/ontology/',
            virtuoso:'http://www.openlinksw.com/virtrdf-data-formats'
        };


        // global application configuration
        var defaultConfig = {
            home:'http://dbpedia.org/sparql',
            sparql : {
              endpoint: 'http://crick.isb-sib.ch:8080/nextprot-api/sparql',
              examples: 'queries.json',
              prefixes: namespacePrefixes
          }
        }


        return defaultConfig;
    }
]);
