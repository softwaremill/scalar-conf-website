speaker: Krzysztof Romanowski
speaker_twitter: RomanowskiKr
speaker_github: romanowski
speaker_website: typosafe.pl
speaker_bio: Krzysztof is Scala specialist @ Virtuslab where he has spent endless hours debugging Scala IDE, SBT, IntelliJ or even Scala compiler itself. Author of expression evaluator engine for Scala IDE.
speaker_photo: images/speakers/romanowski.png
talk_title: Incremental compiler: taming scalac



In the wild, Scalac is an enormous beast. When run freely compilation takes ages even for simple changes in your project. Luckily, in the end of stone age of scala tooling first incremental compilers emerged and time spent on scala compilation’s become less and less noticeable...

In this talk I want to explain what incremental compiler is and how it works in sbt world. Further down the road I will show how name hashing reduces amount of compiled files. In the end we will ask ourselves if we can do any better (and by what cost).