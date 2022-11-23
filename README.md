# ncc action demo

Trying to work out why `@actions/http-client` didn't seem to work.

Turns out you can't destructure the response because then the `readBody` method is unbound.
