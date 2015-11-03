# Phaser 3 Work Log

Richard Davey (rich@photonstorm.com)

I've decided to keep a log of work on Phaser 3 here in the repo. It can be removed when the project goes live, but will serve as a handy log of what I'm doing and thinking during development.

### TODO

I'll add to this bullet list as I think of things while writing the entries below.

* I need to find a way to allow for non-English error messages in Errors and console warnings.
* I'd like to find a way to allow for non-English jsdocs as well, inline in the code, but not sure how without using some kind of build script (which may not be a bad idea?)

### 2nd November 2015

Time to convert Signals to ES6. I really like Signals as I feel they solve a lot of the issues that normal string based event dispatchers have. However they fail in one key area: You cannot bind a generic listener to a class and be notified about all of the signals it dispatches. You have to bind a listener to a specific signal, a 1:1 mapping. This is something I'm going to address in the rewrite.

The new Signals class uses a Map internally and spread arguments to avoid array slicing all over the place. One issue is that Maps are always iterated in the order in which entries are added. So in order to support Signal priority we may have to re-order the Map each time. I'm not sure how many people ever use Signal priority though (I've never used it once in all these years), so am tempted to remove it.

Added in a new SignalGroup. A class can now create a SignalGroup and assign all of its Signals to it. You can then listen to the SignalGroup itself and any signals in the Group that are dispatched get sent to your handler, without needing to set-up each one specifically.

Thinking about a new 'events' property for base classes. Maybe a custom type of Signal interface that you could listen to:

`aliens.events.addEventListener('DEATH', this.deathHandler);` or
`aliens.events.add('DEATH', this.deathHandler);` or
`aliens.events.listen('DEATH', this.deathHandler);`

and then:

`aliens.dispatch('DEATH', ...arguments);`

Internally the string could be a Map key. The benefit of this approach is that we only need one internal class object. The downside is the iteration through the key handlers.

Update: After asking on twitter and the forum I've decided to remove the PriorityID from Signal. I've also removed the callCount from SignalBinding as I just don't think it's needed. Part of me is tempted to get rid of the binding entirely and wrap it up into a Signal callbacks Map object.



### 1st November 2015

Starting work on the new StateManager.

States will now be persistent and be their own root-level display object containers. Objects added within a state will be added to the States container, not the 'World'. The World will now consist of just multiple layered states.

States will have their own Clock.

You can have as many States running at once as you need.

Also completed lots of work on Geometry, splitting up Rectangle, Line, etc.
