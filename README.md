# PomoTimer

This is a pomodoro timer that plays music from different sources 
Integrating APIs such as Youtube and Spotify 
Offering Authentication to save and secure accounts 

Tech Stack 
### Frontend:
Handling the time, music processing, playing/pausing, using the Youtube API to be able to play
Implement Caching for people who don't want to log in it will just keep the music stored in the DB

- React
- MUI (This is like the third time changing)
- Vite as the Bundler
- Vitest and React Tests


### Backend:
Handling the interaction with the Database and storing all the user information such as time configuration and music that the user has saved
- C#
- Using Supabase
- PostGres SQL as Database (Hosted using AWS RDS) 
- OAuth Authentication


### Hosting: 
- AWS
- Fly.io


### Features to implement eventually (Nice to have)
- Spotify Integration that preloads users' Spotify playlists
- Test Change
