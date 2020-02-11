## Written Answers
<br>

* What **models** will you need? Why?
    - The two models I will need are Stocks and Average Prices
    - The Stocks table will hold a stock name and have a relationship to many Average Prices

<br>

* What is the relation between **average prices** and **stocks**?
    - This will be a one to many relationship
    - An Stock (name of the company) will have many different average prices on different dates

* What **columns** would you want for your tables?

    ##### Average Prices

    | ID | Price | Created At | Stock ID |
    | ----------- | ----------- | ----------- | ----------- |
    | 1 | 28.5 | 2017-05-20 | 2


    ##### Stocks

    | ID | Name | Created At | 
    | ----------- | ----------- | ----------- | 
    | 1 | Apple | 2017-05-20 | 


* Does one of your tables get a **foreign key** column? If so, which?
    - Yes, the average price would have a foreign key that relates to a stock price.

<br>

* What **controllers** will you need?
    - I will need a controller for Stocks.
* What **routes** do you want your API to have?
    - `/stocks`
    - `/stocks/:id`
* What **actions** will your controller need, given your routes?
    - Index 
    - Show  

<br>

* Can you make your API 'self-evident'? Meaning, your API requires little explanation for an end-user?
    - I hope so!
