node-cassandra-snippets
=======================

Sample Node.js Cassandra snippets using the datastax cassandra-driver.

###Install Cassandra

-   Download Cassandra from [here](http://cassandra.apache.org/download/)
-   Extract the file and move into the root folder i.e. apache-cassandra-*
-   run **bin/cassandra -f** to run cassandra in foreground mode and set appropriate permissions for the log/cache files as required
-   now run **bin/cqlsh** from a new terminal to start the commandline console
-   run **CREATE KEYSPACE sample WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };** in the console to create a new keyspace(database) called *sample*.
-   now run **npm install** to install the dependency.
-   now run **node db-setup.js** to setup the database tables.
-   you can checkout the examples by running **node example.js**.

