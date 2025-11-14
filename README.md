# HeroDex

This repository is a [json-server](https://github.com/typicode/json-server) created to feed data into the React Application below.

#### [Client Repo here](www.your-github-url-here.com)

# Server Structure

## Collections

### characters

{
  id,
  name,
  universe,
  species,
  threatLevel,
  powerLevel,
  alignment,   // "Hero" or "Villain"
  isHero,      // boolean
  description,
  image
}


### reviews

```javascript
 {
   text,
   characterId,
 }
```

## Used API Endpoints in the App

| HTTP Method | URL                         | Request Body                 | Description                                                    |
| ----------- | --------------------------- | ---------------------------- | -------------------------------------------------------------- |
| GET         | `/characters`               |                              | Returns all characters                                         |
| POST        | `/characters`               | {name, universe, species,    | Creates a new character                                        |
|             |                             |   threatLevel, powerLevel,   |                                                                |
|             |                             |  alignment, isHero,          |                                                                |
|             |                             |  description, image}         |                                                                |
| GET         | `/characters/:id`           |                              | Returns a single character by ID                               |
| PUT         | `/characters/:id`           | {title, description, isFav}  | Updates a character completely                                 |
| DELETE      | `/characters/:id`           |                              | Deletes a character                                            |
| PATCH       | `/characters/:id`           | {text, gameId}               | Updates only specific fields                                   |

 
## Links

### Collaborators

[Anton Sancho](https://github.com/antonsanchoe-arch)

### Project

[Repository Link Client](https://github.com/antonsanchoe-arch/client-module2-project)

[Repository Link Server](https://github.com/antonsanchoe-arch/server-module2-project)

[Deploy Link](https://herodex-git-master-anton-sanchos-projects.vercel.app/characters)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
