speaker: Maciej Biłas
speaker_twitter: maciejb
speaker_github: 
speaker_website: 
speaker_bio: Maciej Biłas is a software engineer at Adform Research. He spent over 3 years developing production Scala code and many more in the JVM ecosystem. Makes data run in the pipes during the day.
talk_title: akka-cluster-etcd



Modern container-based cluster computing frameworks like Mesos, Kubernetes, or EC2 Container Service usually execute services on nodes not known beforehand. This creates a problem for Akka Cluster deployments, where seed nodes need to be established.

In this talk we present a zero-configuration deployment scenario for Akka Cluster using etc.d as a distributed configuration store.