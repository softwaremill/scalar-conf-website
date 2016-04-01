speaker: Eric Torreborre
speaker_twitter: etorreborre
speaker_github: 
speaker_website: 
speaker_bio: I am a software developer living in Berlin, working for Zalando. I am the creator of the specs2 library for software specifications in Scala.
Scala has has been my gateway drug to functional programming and to many "unknown unknowns". When I manage to go from "unknown unknowns" to "known knowns" I try to spread the word.
talk_title: The Eff monad, one monad to rule them all



Monad transformers are a neat way to compose effectul computations: pass some configuration, read/write from disk, track errors...

However they can be a bit cumbersome to deal with, especially if you want to use different stacks sharing some common effects: for example a stack to interact with AWS and another one for Hadoop computations.

This talk will shortly introduce monad transformers in Scala and their drawbacks then present the Eff monad.

The Eff monad has some really interesting properties:
- effects can be developed completely independently from each other
- effects can be interpreted in different ways and the interpreters can be composed together
- it is based on an efficient "Free monad" (avoiding the issue of quadratic flatMaps)
- with the Eff monad you will never have to re-implement the Monad operations (point / flatMap) again!