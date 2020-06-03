# node-task

<h2>Prerequisite</h2>

```

git: 2.20.1,
node: 13.7.0,
npm: 6.13.6,
yarn: 1.21.1,


docker: 19.03.5,
containerd containerd.io: 1.2.10
docker-compose: 1.21.0

```

<h2>Luanching project</h2>

First of all clone this repository using command below, and go to project directory

```
git clone https://github.com/mjaracz/node-task.git && cd node-task/workdir

```
Then install necessary dependency

```
yarn install
```

To start application in development mode, just typing

```
yarn run start:dev
``` 

To run all unit test use command

```
yarn run test:watch 

```

With testing coverage report, just typing:

```
yarn run test:cov

```



<h2>Access to the endpoint</h2>


```

------------------------------------------PRODUCT------------------------------------------------


-> GET /products
----> list all available products from db

-> POST /products/create
----> create new product, from req body

-> GET /products/:id
----> list product by id

-> GET /products/page/:nr
----> list product by page

-> GET /products/types/:name_type
----> list product filter by type


---------------------------------------------CART---------------------------------------------------


-> GET /cart
----> list user cart 

-> GET /price  query('currency') query('username)
----> calculate cart price, show with field, user_id, cart_id, total_price 

-> POST /create 
----> add new cart to the db

-> GET /add_product/:product_id
----> add product from magazine, to the user cart

-> DELETE /delete_product/:product_id
----> delete product from cart

```

<h2>Docker</h2>

The whole project is containerd using docker solution.
To build your container based for Dockerfile, in local environment, use command, in root project directory:

```

docker build -f .docker/Dockerfile . -t node-task

```

Than just run docker container, using command belowe:

```

docker run node-task

```

 
