In this example we can use xss by giving a onerror method to img tag.

1) write a name to box your message.
2) we are passing url coming from user directly to the src of the img tagg.
This is a vulnerability, since as string we can add " and close the src attribute,later
we can write our  custom function into the onerror attribute.
 -> write " onerror="alert('hacked')" in the image box and submit the form.
 It will show an alert box.
 We can also write any javascript code that we want.