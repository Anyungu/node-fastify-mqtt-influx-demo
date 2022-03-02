# If you had more time and resources, how would you improve this feature/process?
Not in any particular order ...
## caching
Setting up caching to reduce some request times, especially for data that rarely changes. Updating caches in the background can be helpful.

## Testing
Addittion of High coverage unit and integration testing

## Automated Testing Optimization
Addition of especially load, stress and volume testing results code optimization

## Worker Threading
Addition of worker threads

## Better Documentation and commenting
Addition of necessary comments and more solid Documentation

## Reuseability
Reuse some code snippetts that indicate similarity


## Prod Level Building
use buiding tools to generate prod level builds

## Better Migration management
Have migrations that don't syncronize with any entity changes

## async
Move full code to async pattern

## separate environments (dev/test/prod)

## Add Github deployment worflows for CI/CD and dockerfiles

# Can you think of a way to tackle the problem our users have from another direction or with a different approach?

## Sockets
Influx has an observable query that can be utilized to emit data to any open clients. This would give clients "realtime" data.

## Single transmitter to add value
I could have a single transmitter in the cold room that can capture multiple data from multiple sensers e.g door-opening-closing sensor etc and have more data for clients.

## MQTT to MSQL (EMQX)
Have the broker send data directly to MySQL.


# If you had to set up the infrastructure behind this feature in AWS, how would it look like?

Several Options ...

## AWS IoT Core
Register the IoT devices in AWS IoT Core. The device sends data to AWS timeseries db. Set up Lambda functions to process/play around with the data. Non IoT data is stored in the AWS RDS.

## Solo run
Set up a cluster (ECS/AKS) and deploy my containerized code (docker) in the cluster nodes. Services will be accessed via the Amazon API Gateway and Route 53 for web services. Non IoT data is stored in the AWS RDS.

## Hybrid
Deploy the API in elastic beanstalk. Use cloud provided Influx Cloud Instance for data storage. Serve the frontend as static assets in s3 and cloudfront.