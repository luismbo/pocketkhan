Pocket Khan
-----------

A proof-of-concept mobile application for browsing Khan Academy videos
off-line. Built with jQuery Mobile and PhoneGap.


HACKING
-------

To build the short-library.json database:

   1. curl http://www.khanacademy.org/api/v1/playlists/library > library.json
   2. node shrink-library
