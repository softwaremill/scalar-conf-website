speaker: Dmytro Petrashko
speaker_twitter: darkdimius
speaker_github: 
speaker_website:
speaker_bio: Dmytro Petrashko is a programming languages and algorithms researcher and a doctoral assistant at EPFL. He is currently working on a doctorate as a research assistant in the School of Computer and Communication Sciences at the EPFL in Switzerland, on experimental Dotty compiler for Scala. Previously he was working on ScalaBlitz—macro generated collections for Scala.
speaker_photo: images/speakers/petrashko.png
talk_title: Making sense of initialization order in Scala



In this talk we will discuss in detail the current object initialization order scheme in Scala.

Though a fundamental and seemingly basic feature, the order in which class fields are initialized is often a source of bugs and frustration for users. We will demonstrate how apparently-innocent changes can lead to surprising behavior at runtime.
	
Workarounds already exist in Scala—early initializers and lazy vals—and alternative compiler implementations could enhance the the safety guarantees provided at compile-time. We will look at some of these possibilities and will briefly discuss potential changes to initialization order in Dotty.