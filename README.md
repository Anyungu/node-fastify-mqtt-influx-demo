# NODE FASTIFY MQTT INFLUX DEMO

## Architectural Decisions

| Tool & Packages     |                          Why?                          |
| :------------------ | :----------------------------------------------------: |
| TypeScript          |           Easier to debug type errors for me           |
| Node                |               Easy to to set up and run                |
| TypeORM             |  Need to compare it with Sequelize (Great migrations)  |
| mqtt  client        |               Easy to set up node client               |
| node-influx  client | Hard but supported officially, Support for Influx v2.* |
| React Tailwind      |        Brilliant for poor stylists like myself         |
| MySQL, AWS RDS      |                  One time easy set up                  |
| Fastify             |           Faster && lighter http operations            |

## Project Structure
### Single Repo with 2 main folders for the frontend and backend code
Mostly for ease of me collaborating with myself and work concurrently.

## How to set up
### Prerequisites
+ NodeJS V12 and above

### Environment
The backend side of the project relies heavily on environment variables. I have accompanied a relevant .env file in the root of the backend project. It can be used as it is, or reference can be made to it.

### Steps
1. Clone the project
2. In the root of the backend folder, install all the packages 
   ```bash 
   npm install
   ```
3. Start the project 
   ```bash
   npm run start
   ```
4. In the root of the frontend folder, install all the packages
   ```bash
   npm install
   ```
5. Start the project 
   ```bash 
   npm run start
   ```

### Visualization
The backend Swagger UI can be found here: http://localhost:9191/documentation

The UI dashboard can be found here:http://localhost:3000

## Challenges Experienced
+ Flux query Language in custom aggregation is not easy to understand
+ Broken Broker. The MQTT Broker broke and was sometimes being misused.