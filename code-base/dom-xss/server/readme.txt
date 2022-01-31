######### How to properly set up the server ##########

1.) Install all dependencies

    npm install 

2.) Initiate server in the root folder

    nodemon index.js

######### How to execute attacks #########

index.ejs

    1.) You type a javascript expression in the input bar. Ex: alert("hacked")
    2.) Attack successful

index2.ejs

    1.) You modify the query string value "default" in the link with a tag of html js script, then you put the script inside of if.
        Ex: default=<script>alert('hakced')</script>
    2.) Attack successful

index3.ejs

    1.) In the textarea you write a JS expression and click the button.

    2.) Attack successful

index4.ejs

    1.) You modify the query string parameter's value of "redir" and use JS pseudo-protocol.
        Ex: redir=javascript:alert("hacked")

    2.) Attack successful


    