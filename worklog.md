# Phaser 3 Work Log

Richard Davey (rich@photonstorm.com)

I've decided to keep a log of work on Phaser 3 here in the repo. It can be removed when the project goes live, but will serve as a handy log of what I'm doing and thinking during development.

### 1st November 2015

Starting work on the new StateManager.

States will now be persistent and be their own root-level display object containers. Objects added within a state will be added to the States container, not the 'World'. The World will now consist of just multiple layered states.

States will have their own Clock.

You can have as many States running at once as you need.

