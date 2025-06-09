export const pc = [
  {
    id: "oop001",
    questionText: "What is the primary benefit of encapsulation in object-oriented programming?",
    options: [
      "It allows multiple inheritance",
      "It hides implementation details and provides data protection",
      "It enables polymorphism",
      "It reduces memory usage"
    ],
    correctAnswerIndex: 1,
    explanation: "Encapsulation hides implementation details and ensures that structural changes remain local, reducing complexity and providing data protection through access modifiers."
  },
  {
    id: "oop002",
    questionText: "Which keyword is used in Java to refer to the current instance of a class?",
    options: [
      "self",
      "current",
      "this",
      "instance"
    ],
    correctAnswerIndex: 2,
    explanation: "The 'this' keyword refers to the current instance of the class and is used to differentiate between instance variables and local variables with the same name."
  },
  {
    id: "oop003",
    questionText: "What type of relationship should inheritance represent?",
    options: [
      "has-a relationship",
      "is-a relationship",
      "uses-a relationship",
      "depends-on relationship"
    ],
    correctAnswerIndex: 1,
    explanation: "Inheritance should represent an 'is-a' relationship (e.g., Dog is-a Animal), not a 'has-a' relationship (e.g., Dog has-a name)."
  },
  {
    id: "oop004",
    questionText: "Which access modifier in Java makes a member accessible only within the same class?",
    options: [
      "public",
      "protected",
      "private",
      "default"
    ],
    correctAnswerIndex: 2,
    explanation: "The private access modifier restricts access to the member only within the same class where it is declared."
  },
  {
    id: "oop005",
    questionText: "What is polymorphism in object-oriented programming?",
    options: [
      "The ability to create multiple objects from one class",
      "The ability of an object to take on many forms",
      "The process of hiding implementation details",
      "The mechanism of code reuse through inheritance"
    ],
    correctAnswerIndex: 1,
    explanation: "Polymorphism is the ability of an object to take on many forms, allowing a parent class reference to refer to child class objects."
  },
  {
    id: "oop006",
    questionText: "What happens during upcasting in Java?",
    options: [
      "Converting a superclass reference to a subclass",
      "Converting a subclass reference to a superclass",
      "Converting between primitive types",
      "Converting objects to strings"
    ],
    correctAnswerIndex: 1,
    explanation: "Upcasting is converting a subclass reference to a superclass reference, which is usually implicit as subclass objects inherit superclass properties."
  },
  {
    id: "oop007",
    questionText: "What characterizes strong cohesion in object-oriented design?",
    options: [
      "Classes that depend heavily on each other",
      "Classes with many unrelated methods",
      "Classes that contain strongly related functionality and aim for single purpose",
      "Classes with public access to all members"
    ],
    correctAnswerIndex: 2,
    explanation: "Strong cohesion means that all routines in a class support a central purpose and contain strongly related functionality."
  },
  {
    id: "oop008",
    questionText: "What type of coupling should be maintained between classes?",
    options: [
      "Tight coupling",
      "Loose coupling",
      "No coupling",
      "Maximum coupling"
    ],
    correctAnswerIndex: 1,
    explanation: "Loose coupling should be maintained so that modules depend little on each other and have small, direct, visible, and flexible relations."
  },
  {
    id: "dp001",
    questionText: "Which design pattern ensures that only one instance of a class is created?",
    options: [
      "Factory Method",
      "Singleton",
      "Builder",
      "Prototype"
    ],
    correctAnswerIndex: 1,
    explanation: "The Singleton pattern ensures that only a single instance of a class is instantiated and provides easy access to that sole instance."
  },
  {
    id: "dp002",
    questionText: "What is the main purpose of the Factory Method pattern?",
    options: [
      "To create multiple instances of the same class",
      "To defer instantiation of an object to a subclass",
      "To copy existing objects",
      "To ensure thread safety"
    ],
    correctAnswerIndex: 1,
    explanation: "Factory Method allows a class to defer instantiation to subclasses, enabling creation of objects without specifying the exact class at compile time."
  },
  {
    id: "dp003",
    questionText: "Which pattern is used to separate the construction of a complex object from its representation?",
    options: [
      "Abstract Factory",
      "Builder",
      "Prototype",
      "Singleton"
    ],
    correctAnswerIndex: 1,
    explanation: "The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create various representations."
  },
  {
    id: "dp004",
    questionText: "What problem does the Adapter pattern solve?",
    options: [
      "Creating families of related objects",
      "Making incompatible interfaces work together",
      "Adding functionality to objects dynamically",
      "Controlling access to objects"
    ],
    correctAnswerIndex: 1,
    explanation: "The Adapter pattern converts the interface of a class into another interface that clients expect, allowing incompatible interfaces to work together."
  },
  {
    id: "dp005",
    questionText: "Which pattern allows adding responsibilities to objects dynamically at runtime?",
    options: [
      "Adapter",
      "Bridge",
      "Decorator",
      "Facade"
    ],
    correctAnswerIndex: 2,
    explanation: "The Decorator pattern allows adding or removing responsibilities to/from objects dynamically at runtime without using subclassing."
  },
  {
    id: "dp006",
    questionText: "What is the main benefit of the Facade pattern?",
    options: [
      "It provides multiple interfaces to a subsystem",
      "It makes a complex subsystem easier to use by providing a simple interface",
      "It allows objects to change their behavior based on state",
      "It enables efficient sharing of objects"
    ],
    correctAnswerIndex: 1,
    explanation: "The Facade pattern provides a simplified interface to a complex subsystem, making it easier to use and reducing dependencies."
  },
  {
    id: "dp007",
    questionText: "Which behavioral pattern defines a one-to-many dependency between objects?",
    options: [
      "Strategy",
      "Observer",
      "Command",
      "State"
    ],
    correctAnswerIndex: 1,
    explanation: "The Observer pattern defines a one-to-many dependency where a state change in one object results in all its dependents being notified automatically."
  },
  {
    id: "dp008",
    questionText: "What does the Strategy pattern allow?",
    options: [
      "Creating objects without specifying their classes",
      "Defining a family of algorithms and making them interchangeable",
      "Adding new operations without changing existing classes",
      "Capturing and restoring an object's state"
    ],
    correctAnswerIndex: 1,
    explanation: "The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable, allowing algorithms to vary independently from clients."
  },
  {
    id: "dp009",
    questionText: "Which pattern is useful for implementing undo functionality?",
    options: [
      "Memento",
      "Command",
      "State",
      "Visitor"
    ],
    correctAnswerIndex: 1,
    explanation: "The Command pattern encapsulates requests as objects, allowing for parameterization, queuing, logging, and support of undoable operations."
  },
  {
    id: "dp010",
    questionText: "What is the primary difference between the Chain of Responsibility and Decorator patterns?",
    options: [
      "They have different structural implementations",
      "Chain of Responsibility has exactly one handler, Decorator has all handlers process the request",
      "Only Decorator can be used for request processing",
      "Chain of Responsibility is a creational pattern"
    ],
    correctAnswerIndex: 1,
    explanation: "In Chain of Responsibility, exactly one handler processes the request, while in Decorator, all decorators in the chain handle the request."
  },
  {
    id: "conc001",
    questionText: "What is the difference between concurrency and parallelism?",
    options: [
      "They are the same concept",
      "Concurrency is about structure, parallelism is about execution",
      "Parallelism only works on single-core systems",
      "Concurrency requires multiple CPUs"
    ],
    correctAnswerIndex: 1,
    explanation: "Concurrency is about dealing with multiple tasks at once (structure), while parallelism is about doing multiple tasks simultaneously (execution)."
  },
  {
    id: "conc002",
    questionText: "Which method is used to start a thread in Java?",
    options: [
      "run()",
      "start()",
      "begin()",
      "execute()"
    ],
    correctAnswerIndex: 1,
    explanation: "The start() method is used to schedule a thread for execution. The run() method contains the thread's code but doesn't create a separate thread when called directly."
  },
  {
    id: "conc003",
    questionText: "What is a race condition in multithreading?",
    options: [
      "When threads compete for CPU time",
      "When threads access shared data concurrently and the outcome depends on timing",
      "When one thread is faster than another",
      "When threads are created in a specific order"
    ],
    correctAnswerIndex: 1,
    explanation: "A race condition occurs when multiple threads access and modify shared data concurrently, and the outcome depends on the unpredictable order of thread execution."
  },
  {
    id: "conc004",
    questionText: "What does the synchronized keyword in Java provide?",
    options: [
      "Faster thread execution",
      "Mutual exclusion and happens-before relationship",
      "Automatic thread creation",
      "Thread priority management"
    ],
    correctAnswerIndex: 1,
    explanation: "The synchronized keyword provides mutual exclusion (only one thread can access the synchronized code at a time) and establishes a happens-before relationship."
  },
  {
    id: "conc005",
    questionText: "What is deadlock in multithreading?",
    options: [
      "When a thread stops executing permanently",
      "When threads are waiting for each other in a circular dependency",
      "When a thread runs too slowly",
      "When thread priorities are set incorrectly"
    ],
    correctAnswerIndex: 1,
    explanation: "Deadlock occurs when two or more threads are waiting for each other to release resources, creating a circular dependency that prevents any thread from proceeding."
  },
  {
    id: "conc006",
    questionText: "What is the purpose of the wait() and notify() methods in Java?",
    options: [
      "To pause and resume thread execution",
      "To coordinate between producer and consumer threads",
      "To set thread priorities",
      "To handle thread exceptions"
    ],
    correctAnswerIndex: 1,
    explanation: "wait() and notify() are used for thread coordination, particularly in producer-consumer scenarios where threads need to wait for certain conditions and be notified when those conditions are met."
  },
  {
    id: "conc007",
    questionText: "What is starvation in multithreading?",
    options: [
      "When a thread consumes too much memory",
      "When a thread is unable to gain regular access to shared resources",
      "When a thread executes too quickly",
      "When a thread is created but never started"
    ],
    correctAnswerIndex: 1,
    explanation: "Starvation occurs when a thread is unable to gain regular access to shared resources and cannot make progress, often due to other threads monopolizing resources."
  },
  {
    id: "conc008",
    questionText: "What is livelock?",
    options: [
      "When threads are blocked permanently",
      "When threads are not blocked but not progressing either",
      "When threads execute too quickly",
      "When threads share too much data"
    ],
    correctAnswerIndex: 1,
    explanation: "Livelock is similar to deadlock but threads are not blocked - they are busy responding to each other to resume work but not actually progressing."
  },
  {
    id: "io001",
    questionText: "What is the difference between byte-oriented and character-oriented streams in Java?",
    options: [
      "Byte streams are faster than character streams",
      "Character streams are for text data, byte streams are for binary data",
      "There is no difference",
      "Character streams can only read ASCII text"
    ],
    correctAnswerIndex: 1,
    explanation: "Character-oriented streams are intended for character data and optimized for text files, while byte-oriented streams are for general-purpose I/O including binary data."
  },
  {
    id: "io002",
    questionText: "Why should you use BufferedReader instead of FileReader directly?",
    options: [
      "BufferedReader provides more methods",
      "BufferedReader is more efficient due to buffering",
      "FileReader cannot read text files",
      "BufferedReader supports more file formats"
    ],
    correctAnswerIndex: 1,
    explanation: "BufferedReader provides buffering which reduces the number of I/O operations by reading data in chunks, making it more efficient than reading one character at a time."
  },
  {
    id: "io003",
    questionText: "What is serialization in Java?",
    options: [
      "Converting objects to XML format",
      "Reading/writing objects and their state into a linear format",
      "Sorting objects in collections",
      "Creating multiple copies of objects"
    ],
    correctAnswerIndex: 1,
    explanation: "Serialization is the process of converting objects and their exact state into a linear format that can be stored or transmitted, and later restored."
  },
  {
    id: "io004",
    questionText: "What interface must a class implement to be serializable in Java?",
    options: [
      "Cloneable",
      "Serializable",
      "Comparable",
      "Runnable"
    ],
    correctAnswerIndex: 1,
    explanation: "A class must implement the java.io.Serializable interface (which has no methods) to indicate that objects of the class can be serialized."
  },
  {
    id: "io005",
    questionText: "What happens to transient fields during serialization?",
    options: [
      "They are serialized normally",
      "They are not saved and revert to default values upon deserialization",
      "They cause a compilation error",
      "They are converted to strings"
    ],
    correctAnswerIndex: 1,
    explanation: "Transient fields are not saved during serialization and will revert to null (for objects) or default primitive values when the object is deserialized."
  },
  {
    id: "io006",
    questionText: "Where should the close() call be placed when working with I/O streams?",
    options: [
      "In the try block",
      "In the catch block",
      "In the finally block",
      "Before the try block"
    ],
    correctAnswerIndex: 2,
    explanation: "The close() call should be placed in the finally block to ensure that resources are closed regardless of whether an exception occurs."
  },
  {
    id: "except001",
    questionText: "What is the difference between checked and unchecked exceptions in Java?",
    options: [
      "Checked exceptions are faster to handle",
      "Checked exceptions must be declared or caught, unchecked exceptions don't",
      "Unchecked exceptions cannot be caught",
      "There is no difference"
    ],
    correctAnswerIndex: 1,
    explanation: "Checked exceptions must be either declared in the method signature or caught in a try-catch block, while unchecked exceptions (RuntimeExceptions) don't require explicit handling."
  },
  {
    id: "except002",
    questionText: "What happens when an exception is not caught in a method?",
    options: [
      "The program continues normally",
      "The exception is propagated up the call stack",
      "The method executes again",
      "A default value is returned"
    ],
    correctAnswerIndex: 1,
    explanation: "If an exception is not caught, it propagates up the call stack to the calling method. If no method catches it, the program terminates."
  },
  {
    id: "except003",
    questionText: "When does the finally block execute?",
    options: [
      "Only when an exception occurs",
      "Only when no exception occurs",
      "Always, whether an exception occurs or not",
      "Only when the try block completes successfully"
    ],
    correctAnswerIndex: 2,
    explanation: "The finally block always executes regardless of whether an exception occurs or not, making it ideal for cleanup operations."
  },
  {
    id: "except004",
    questionText: "What is the 'Handle or Declare' rule in Java?",
    options: [
      "You must either catch the exception or declare it in the method signature",
      "You must always handle exceptions immediately",
      "You must declare all variables before use",
      "You must handle all exceptions in the main method"
    ],
    correctAnswerIndex: 0,
    explanation: "For checked exceptions, you must either catch them in a try-catch block or declare them in the method signature using the throws keyword."
  },
  {
    id: "coll001",
    questionText: "What is the main advantage of the Java Collections Framework?",
    options: [
      "Faster execution speed",
      "Consistent API and reduced programming effort",
      "Smaller memory usage",
      "Automatic garbage collection"
    ],
    correctAnswerIndex: 1,
    explanation: "The Collections Framework provides a consistent API with common interfaces and methods, reducing programming effort and enabling effective use of OOP concepts."
  },
  {
    id: "coll002",
    questionText: "What is the difference between ArrayList and LinkedList in terms of performance?",
    options: [
      "ArrayList is always faster",
      "LinkedList is always faster",
      "ArrayList provides constant-time access, LinkedList provides efficient insertion/removal",
      "There is no performance difference"
    ],
    correctAnswerIndex: 2,
    explanation: "ArrayList provides constant-time positional access but linear-time insertion/removal in middle, while LinkedList offers efficient insertion/removal but no efficient random access."
  },
  {
    id: "coll003",
    questionText: "What are generics in Java Collections?",
    options: [
      "A way to make collections store any type of object",
      "A way to specify the type of objects a collection can store at compile time",
      "A method to improve performance",
      "A technique for automatic sorting"
    ],
    correctAnswerIndex: 1,
    explanation: "Generics allow you to specify the type of objects a collection can store at compile time, providing type safety and eliminating the need for casting."
  },
  {
    id: "coll004",
    questionText: "What is the default initial capacity of a HashMap in Java?",
    options: [
      "10",
      "16",
      "32",
      "8"
    ],
    correctAnswerIndex: 1,
    explanation: "The default initial capacity of a HashMap is 16 buckets with a load factor of 0.75."
  },
  {
    id: "coll005",
    questionText: "What happens when a HashMap reaches its threshold?",
    options: [
      "It stops accepting new elements",
      "It throws an exception",
      "It doubles its capacity through rehashing",
      "It removes old elements"
    ],
    correctAnswerIndex: 2,
    explanation: "When a HashMap reaches its threshold (capacity × load factor), it doubles its capacity and rehashes all existing elements to maintain performance."
  },
  {
    id: "coll006",
    questionText: "Which collection provides the best performance for contains() operation?",
    options: [
      "ArrayList",
      "LinkedList",
      "HashSet",
      "Vector"
    ],
    correctAnswerIndex: 2,
    explanation: "HashSet provides the best performance for contains() operation with constant time complexity, while list-based collections have linear time complexity."
  },
  {
    id: "mem001",
    questionText: "What is garbage collection in Java?",
    options: [
      "Manual memory deallocation",
      "Automatic detection and freeing of unused memory",
      "Disk space cleanup",
      "Variable declaration cleanup"
    ],
    correctAnswerIndex: 1,
    explanation: "Garbage collection is the automatic process of detecting and freeing memory that is no longer reachable or in use by the program."
  },
  {
    id: "mem002",
    questionText: "What is the typical overhead of garbage collection on application performance?",
    options: [
      "Up to 1%",
      "Up to 5%",
      "Up to 10%",
      "Up to 25%"
    ],
    correctAnswerIndex: 2,
    explanation: "The overhead of garbage collection on application performance is typically up to 10% of execution time."
  },
  {
    id: "mem003",
    questionText: "What is string interning in Java?",
    options: [
      "Converting strings to integers",
      "Storing only one copy of each unique string value",
      "Sorting strings alphabetically",
      "Compressing string data"
    ],
    correctAnswerIndex: 1,
    explanation: "String interning is an optimization technique that stores only one copy of each unique string value in a cache-like collection to save memory."
  },
  {
    id: "mem004",
    questionText: "How much larger is an Integer object compared to an int primitive on a 32-bit system?",
    options: [
      "2 times larger",
      "3 times larger",
      "4 times larger",
      "8 times larger"
    ],
    correctAnswerIndex: 2,
    explanation: "An Integer object is 4 times larger than an int primitive due to object metadata (class pointer, flags, locks) that adds overhead."
  },
  {
    id: "mem005",
    questionText: "What is the recommended way to reduce computational cost of memory allocation?",
    options: [
      "Use only primitive types",
      "Implement custom garbage collection",
      "Use caching to reuse objects",
      "Avoid creating any objects"
    ],
    correctAnswerIndex: 2,
    explanation: "Caching is the best technique to reduce computational cost of allocation and garbage collection by reusing objects instead of creating new ones."
  },
  {
    id: "state001",
    questionText: "What is a state in a statechart diagram?",
    options: [
      "A transition between events",
      "A period of time during which an object waits for an event",
      "An action performed by an object",
      "A condition that must be met"
    ],
    correctAnswerIndex: 1,
    explanation: "A state is a period of time during which an object is waiting for an event to occur, representing a specific condition or mode of the object."
  },
  {
    id: "state002",
    questionText: "What triggers a transition in a state machine?",
    options: [
      "Time passage",
      "An event",
      "Memory allocation",
      "Method invocation"
    ],
    correctAnswerIndex: 1,
    explanation: "A transition is triggered by an event, which is a one-way asynchronous communication that may cause an object to change states."
  },
  {
    id: "state003",
    questionText: "What are entry and exit operations in states?",
    options: [
      "Methods for creating and destroying objects",
      "Operations triggered when entering or leaving a state",
      "Input and output operations",
      "Exception handling mechanisms"
    ],
    correctAnswerIndex: 1,
    explanation: "Entry operations are triggered when a transition is made into a state, and exit operations are triggered when a transition is made out of a state."
  },
  {
    id: "nfr001",
    questionText: "What are non-functional requirements also known as?",
    options: [
      "Behavioral requirements",
      "ilities (illities)",
      "System requirements",
      "User requirements"
    ],
    correctAnswerIndex: 1,
    explanation: "Non-functional requirements are conventionally identified as 'ilities' or 'illities' such as usability, reliability, scalability, etc."
  },
  {
    id: "nfr002",
    questionText: "According to Jakob Nielsen, what is the limit after which system reaction does not seem instantaneous?",
    options: [
      "0.01 seconds",
      "0.1 seconds",
      "1 second",
      "10 seconds"
    ],
    correctAnswerIndex: 1,
    explanation: "0.1 second is the limit after which the system reaction does not seem instantaneous to users, according to Jakob Nielsen's usability guidelines."
  },
  {
    id: "nfr003",
    questionText: "What is the main difference between functional and non-functional requirements?",
    options: [
      "Functional requirements are more important",
      "Functional requirements describe what the product does, non-functional describe how it works",
      "Non-functional requirements are optional",
      "There is no significant difference"
    ],
    correctAnswerIndex: 1,
    explanation: "Functional requirements describe what the product does (features), while non-functional requirements describe how the product works (quality attributes)."
  },
  {
    id: "java001",
    questionText: "What is the purpose of static members in a Java class?",
    options: [
      "To create multiple instances of variables",
      "To belong to the class rather than instances",
      "To provide faster access to methods",
      "To enable inheritance"
    ],
    correctAnswerIndex: 1,
    explanation: "Static members belong to the class itself rather than to any specific instance, and are shared among all instances of the class."
  },
  {
    id: "java002",
    questionText: "Can non-static methods be called from static methods in Java?",
    options: [
      "Yes, always",
      "No, never",
      "Only with an instance reference",
      "Only in the same package"
    ],
    correctAnswerIndex: 1,
    explanation: "Non-static methods cannot be called from static methods directly because static methods don't have access to instance context."
  },
  {
    id: "java003",
    questionText: "What is constructor chaining in Java?",
    options: [
      "Creating multiple constructors in sequence",
      "One constructor calling another constructor using this()",
      "Inheriting constructors from parent class",
      "Automatically generating constructors"
    ],
    correctAnswerIndex: 1,
    explanation: "Constructor chaining is when one constructor calls another constructor of the same class using this() with different parameters."
  },
  {
    id: "java004",
    questionText: "What is the difference between method overriding and method hiding in Java?",
    options: [
      "They are the same concept",
      "Overriding is for instance methods, hiding is for static methods",
      "Hiding is for instance methods, overriding is for static methods",
      "Overriding only works with interfaces"
    ],
    correctAnswerIndex: 1,
    explanation: "Method overriding applies to instance methods where subclass provides specific implementation, while method hiding applies to static methods."
  },
  {
    id: "java005",
    questionText: "What makes an object eligible for garbage collection in Java?",
    options: [
      "When it's created with new operator",
      "When there are no more references to it",
      "When it goes out of scope",
      "When the finalize() method is called"
    ],
    correctAnswerIndex: 1,
    explanation: "An object becomes eligible for garbage collection when there are no more references to it from any part of the program that is still reachable."
  },
  {
    id: "adv001",
    questionText: "In the Interpreter pattern, what does the Abstract Syntax Tree (AST) represent?",
    options: [
      "The grammar rules of the language",
      "The expression to be evaluated composed of expression instances",
      "The output of the interpretation",
      "The lexical analysis result"
    ],
    correctAnswerIndex: 1,
    explanation: "The AST represents an expression in the language made up of Expression instances, which is then evaluated by calling interpret() on the tree."
  },
  {
    id: "adv002",
    questionText: "What is the key difference between the Bridge and Adapter patterns?",
    options: [
      "Bridge is structural, Adapter is behavioral",
      "Bridge separates abstraction from implementation, Adapter makes incompatible interfaces work together",
      "Adapter is newer than Bridge",
      "There is no significant difference"
    ],
    correctAnswerIndex: 1,
    explanation: "Bridge pattern separates abstraction from implementation allowing both to vary independently, while Adapter makes existing incompatible interfaces work together."
  },
  {
    id: "adv003",
    questionText: "In the Flyweight pattern, what is the difference between intrinsic and extrinsic state?",
    options: [
      "Intrinsic is public, extrinsic is private",
      "Intrinsic is context-independent and shareable, extrinsic is context-dependent",
      "Intrinsic is faster to access",
      "There is no difference"
    ],
    correctAnswerIndex: 1,
    explanation: "Intrinsic state is context-independent and can be shared among flyweight objects, while extrinsic state is context-dependent and must be passed in."
  },
  {
    id: "adv004",
    questionText: "What is the main advantage of the Template Method pattern?",
    options: [
      "It provides multiple implementations of the same algorithm",
      "It defines the skeleton of an algorithm while letting subclasses override specific steps",
      "It allows dynamic algorithm selection",
      "It eliminates the need for inheritance"
    ],
    correctAnswerIndex: 1,
    explanation: "Template Method defines the invariant parts of an algorithm in a base class while allowing subclasses to customize specific steps without changing the overall structure."
  },
  {
    id: "adv005",
    questionText: "In concurrent programming, what is a daemon thread?",
    options: [
      "A thread with highest priority",
      "A thread that provides services to user threads and depends on them for survival",
      "A thread that runs only once",
      "A thread that handles exceptions"
    ],
    correctAnswerIndex: 1,
    explanation: "Daemon threads provide background services to user threads and have no role other than serving user threads. Their life depends on user threads."
  },
  {
    id: "adv006",
    questionText: "What is the difference between wait() and sleep() in Java threading?",
    options: [
      "wait() releases the lock, sleep() doesn't",
      "sleep() releases the lock, wait() doesn't",
      "They are identical",
      "wait() is faster than sleep()"
    ],
    correctAnswerIndex: 0,
    explanation: "wait() releases the object's lock and waits for notification, while sleep() pauses the thread for a specified time without releasing any locks."
  },
  {
    id: "adv007",
    questionText: "In the Mediator pattern, what is the primary benefit?",
    options: [
      "Faster communication between objects",
      "Lower coupling by centralizing complex communications",
      "Better memory usage",
      "Automatic error handling"
    ],
    correctAnswerIndex: 1,
    explanation: "The Mediator pattern reduces coupling by encapsulating how objects interact, preventing them from referring to each other directly."
  },
  {
    id: "adv008",
    questionText: "What distinguishes the Proxy pattern from the Decorator pattern?",
    options: [
      "Proxy controls access, Decorator adds functionality",
      "Decorator controls access, Proxy adds functionality",
      "They serve the same purpose",
      "Proxy is only for remote objects"
    ],
    correctAnswerIndex: 0,
    explanation: "Proxy pattern controls access to an object and may provide additional functionality, while Decorator pattern focuses on adding responsibilities dynamically."
  },
  {
    id: "adv009",
    questionText: "In the Visitor pattern, what does the 'double dispatch' mechanism achieve?",
    options: [
      "Faster execution",
      "Type safety",
      "Allows adding new operations without modifying existing classes",
      "Better memory management"
    ],
    correctAnswerIndex: 2,
    explanation: "The Visitor pattern's double dispatch allows adding new operations to existing object structures without modifying the classes of the elements."
  },
  {
    id: "adv010",
    questionText: "What is the main drawback of the Interpreter pattern?",
    options: [
      "It's too slow",
      "Complex grammars require many classes",
      "It doesn't support recursion",
      "It only works with simple data types"
    ],
    correctAnswerIndex: 1,
    explanation: "The main disadvantage of the Interpreter pattern is that complex grammars require a large number of classes, as each grammar rule needs at least one separate class."
  },
  {
    id: "perf001",
    questionText: "According to the performance comparison data, which collection has the best performance for add() operations?",
    options: [
      "HashSet",
      "ArrayList",
      "Vector",
      "LinkedList"
    ],
    correctAnswerIndex: 3,
    explanation: "LinkedList shows the best performance for add() operations due to its structure allowing efficient insertion without array resizing."
  },
  {
    id: "perf002",
    questionText: "Which collection should be avoided for contains() operations on large datasets?",
    options: [
      "HashSet",
      "TreeSet",
      "ArrayList",
      "HashMap"
    ],
    correctAnswerIndex: 2,
    explanation: "ArrayList should be avoided for contains() operations on large datasets as it has linear time complexity, making it very slow for large collections."
  },
  {
    id: "perf003",
    questionText: "What is the default load factor for HashMap in Java?",
    options: [
      "0.5",
      "0.75",
      "1.0",
      "0.25"
    ],
    correctAnswerIndex: 1,
    explanation: "The default load factor for HashMap is 0.75, which provides a good trade-off between space and time complexity."
  },
  {
    id: "perf004",
    questionText: "What is the memory overhead of an empty HashMap with default settings?",
    options: [
      "64 bytes",
      "88 bytes",
      "128 bytes",
      "144 bytes"
    ],
    correctAnswerIndex: 2,
    explanation: "An empty HashMap with default settings (capacity 16) uses 128 bytes: 48 bytes for HashMap overhead + 16 bytes array overhead + 64 bytes for array entries."
  },
  {
    id: "design001",
    questionText: "Which principle states that software entities should be open for extension but closed for modification?",
    options: [
      "Single Responsibility Principle",
      "Open-Closed Principle",
      "Liskov Substitution Principle",
      "Interface Segregation Principle"
    ],
    correctAnswerIndex: 1,
    explanation: "The Open-Closed Principle, explained by Bertrand Meyer, states that software entities should be open for extension but closed for modification."
  },
  {
    id: "design002",
    questionText: "What are the two main principles emphasized by the Gang of Four?",
    options: [
      "Inheritance over composition, concrete classes over interfaces",
      "Program to an interface not an implementation, favor composition over inheritance",
      "Always use design patterns, avoid procedural programming",
      "Maximize coupling, minimize cohesion"
    ],
    correctAnswerIndex: 1,
    explanation: "The GoF emphasizes programming to interfaces rather than implementations and favoring object composition over inheritance."
  },
  {
    id: "design003",
    questionText: "What is the primary goal of design patterns?",
    options: [
      "To make code run faster",
      "To solve recurring design problems with flexible and reusable solutions",
      "To reduce memory usage",
      "To eliminate the need for documentation"
    ],
    correctAnswerIndex: 1,
    explanation: "Design patterns provide flexible and reusable solutions to recurring design problems in object-oriented software development."
  },
  {
    id: "stream001",
    questionText: "What is the main difference between BufferedReader and FileReader?",
    options: [
      "BufferedReader can read binary files",
      "BufferedReader provides buffering for more efficient reading",
      "FileReader is deprecated",
      "There is no significant difference"
    ],
    correctAnswerIndex: 1,
    explanation: "BufferedReader wraps another reader (like FileReader) and provides buffering, which reduces I/O operations by reading data in chunks."
  },
  {
    id: "stream002",
    questionText: "What is the purpose of the Iterator interface in Java collections?",
    options: [
      "To sort collections",
      "To provide a way to access elements sequentially without exposing underlying structure",
      "To search for specific elements",
      "To convert collections to arrays"
    ],
    correctAnswerIndex: 1,
    explanation: "The Iterator interface provides a standard way to traverse collections sequentially without needing to know the internal structure of the collection."
  },
  {
    id: "stream003",
    questionText: "What happens if you try to serialize an object that contains non-serializable fields?",
    options: [
      "Only the serializable fields are saved",
      "A NotSerializableException is thrown",
      "The non-serializable fields are set to null",
      "The object is serialized normally"
    ],
    correctAnswerIndex: 1,
    explanation: "If an object contains non-serializable fields (that aren't marked transient), a NotSerializableException will be thrown during serialization."
  },
  {
    id: "impl001",
    questionText: "In a LinkedList implementation, what does each LinkedList$Entry object contain?",
    options: [
      "Only the data element",
      "Data element and next pointer",
      "Previous pointer, next pointer, and data element",
      "Data element and index"
    ],
    correctAnswerIndex: 2,
    explanation: "LinkedList is implemented as a doubly-linked list, so each entry contains references to both previous and next elements, plus the data element."
  },
  {
    id: "impl002",
    questionText: "What is rehashing in HashMap?",
    options: [
      "Changing the hash function",
      "Doubling the capacity and redistributing all elements",
      "Removing duplicate elements",
      "Sorting the elements"
    ],
    correctAnswerIndex: 1,
    explanation: "Rehashing occurs when HashMap reaches its threshold - the capacity is doubled and all existing elements are redistributed among the new buckets."
  },
  {
    id: "impl003",
    questionText: "What is the default sequence of HashMap capacity sizes during rehashing?",
    options: [
      "16, 24, 36, 54...",
      "16, 32, 64, 128...",
      "16, 20, 24, 28...",
      "16, 48, 144, 432..."
    ],
    correctAnswerIndex: 1,
    explanation: "HashMap doubles its capacity during rehashing, so the sequence is 16, 32, 64, 128, 256, etc."
  },
  {
    id: "gc001",
    questionText: "What are the two main techniques used by garbage collectors?",
    options: [
      "Marking and sweeping",
      "Reference counting and tracing",
      "Copying and compacting",
      "Scanning and cleaning"
    ],
    correctAnswerIndex: 1,
    explanation: "Garbage collectors typically use reference counting (tracking number of references) and tracing (following pointers from roots) to determine unused memory."
  },
  {
    id: "gc002",
    questionText: "What makes an object unreachable for garbage collection?",
    options: [
      "When it's older than a certain time",
      "When it's not reachable from active variables or stack",
      "When it uses too much memory",
      "When it's created in a loop"
    ],
    correctAnswerIndex: 1,
    explanation: "An object becomes eligible for garbage collection when it's not reachable from any active variables, the stack, or other reachable objects."
  },
  {
    id: "arch001",
    questionText: "What are the main components of the Java Collections Framework hierarchy?",
    options: [
      "List, Set, Map",
      "Collection interface and Map interface",
      "ArrayList, HashMap, HashSet",
      "Array, Vector, Hashtable"
    ],
    correctAnswerIndex: 1,
    explanation: "The Java Collections Framework has two main root interfaces: Collection interface (for groups of objects) and Map interface (for key-value pairs)."
  },
  {
    id: "arch002",
    questionText: "In the State pattern implementation, what determines which behavior is executed?",
    options: [
      "The method parameters",
      "The current state object",
      "A random selection",
      "The calling thread"
    ],
    correctAnswerIndex: 1,
    explanation: "In the State pattern, the context object delegates behavior to its current state object, which encapsulates state-specific behavior."
  },
  {
    id: "thread001",
    questionText: "What is the purpose of the join() method in Java threading?",
    options: [
      "To merge two threads into one",
      "To wait for another thread to complete",
      "To start multiple threads simultaneously",
      "To interrupt a running thread"
    ],
    correctAnswerIndex: 1,
    explanation: "The join() method allows one thread to wait for the completion of another thread before continuing execution."
  },
  {
    id: "thread002",
    questionText: "What is an intrinsic lock in Java?",
    options: [
      "A lock that cannot be acquired",
      "A lock associated with every object for synchronization",
      "A lock only for static methods",
      "A lock that expires automatically"
    ],
    correctAnswerIndex: 1,
    explanation: "Every object in Java has an intrinsic lock (monitor) that is automatically acquired when entering a synchronized method or block."
  },
  {
    id: "pattern001",
    questionText: "Which pattern is most suitable for implementing a logging system where only one logger should exist?",
    options: [
      "Factory Method",
      "Singleton",
      "Observer",
      "Strategy"
    ],
    correctAnswerIndex: 1,
    explanation: "Singleton pattern ensures only one instance exists, making it ideal for logging systems where you want a single point of log management."
  },
  {
    id: "pattern002",
    questionText: "In which scenario would you prefer the Bridge pattern over simple inheritance?",
    options: [
      "When you need to copy objects",
      "When you want to vary both abstraction and implementation independently",
      "When you need to add methods to existing classes",
      "When you want to control object creation"
    ],
    correctAnswerIndex: 1,
    explanation: "Bridge pattern is ideal when you need both the abstraction and its implementation to vary independently, which simple inheritance cannot provide."
  },
  {
    id: "opt001",
    questionText: "What is the main trade-off when choosing between memory usage and performance in collections?",
    options: [
      "Hash-based collections use more memory but provide faster search",
      "Array-based collections are always better",
      "Memory usage doesn't affect performance",
      "Smaller collections are always faster"
    ],
    correctAnswerIndex: 0,
    explanation: "Hash-based collections (like HashMap, HashSet) use more memory for hash tables but provide constant-time search, while array-based collections use less memory but have linear search time."
  },
  {
    id: "opt002",
    questionText: "Why should you specify initial capacity when creating collections?",
    options: [
      "To make the collection immutable",
      "To avoid costly resizing operations",
      "To enable automatic sorting",
      "To improve thread safety"
    ],
    correctAnswerIndex: 1,
    explanation: "Specifying appropriate initial capacity prevents costly resizing and rehashing operations that degrade performance as the collection grows."
  },
  {
    id: "string001",
    questionText: "What is the memory overhead of a Java String object?",
    options: [
      "32 bits",
      "128 bits",
      "256 bits",
      "352 bits"
    ],
    correctAnswerIndex: 3,
    explanation: "A Java String object has a fixed memory overhead of 352 bits (44 bytes) due to object metadata, which is significant for short strings."
  },
  {
    id: "string002",
    questionText: "What happens during string concatenation using the + operator in Java?",
    options: [
      "Strings are directly joined",
      "A new StringBuilder is created internally",
      "Memory is allocated for each character",
      "The operation is optimized away"
    ],
    correctAnswerIndex: 1,
    explanation: "String concatenation using + operator internally creates a StringBuilder, calls append(), and then toString(), creating temporary objects."
  },
  {
    id: "req001",
    questionText: "What is the main difference between functional and non-functional requirements documentation?",
    options: [
      "Functional requirements are longer",
      "Functional requirements are captured in use cases, non-functional as quality attributes",
      "Only functional requirements are testable",
      "Non-functional requirements are optional"
    ],
    correctAnswerIndex: 1,
    explanation: "Functional requirements are typically documented in use cases describing what the system does, while non-functional requirements are captured as quality attributes describing how the system performs."
  },
  {
    id: "req002",
    questionText: "According to the course material, what are the main phases of program construction methodology?",
    options: [
      "Only coding and testing",
      "Requirements analysis, specification, design, coding, testing, deployment, maintenance",
      "Just design and implementation",
      "Planning and execution only"
    ],
    correctAnswerIndex: 1,
    explanation: "Program construction methodology includes requirements analysis, specification, architecture design, component design, coding, testing, deployment, and maintenance phases."
  },
  {
    id: "final001",
    questionText: "What is the key insight about object size vs. data size in Java?",
    options: [
      "Objects are the same size as their data",
      "Objects are much larger than the data they contain due to metadata overhead",
      "Objects are smaller than primitive data",
      "Object size is unpredictable"
    ],
    correctAnswerIndex: 1,
    explanation: "Java objects are much larger than the actual data they store due to metadata overhead (class pointer, flags, locks, etc.) required for memory management and synchronization."
  },
  {
    id: "final002",
    questionText: "What is the most important principle for effective memory management in Java?",
    options: [
      "Always use primitive types",
      "Minimize scope of object references and use caching when appropriate",
      "Create as many objects as possible",
      "Never use collections"
    ],
    correctAnswerIndex: 1,
    explanation: "Effective memory management involves carefully managing object scope to help garbage collection and using caching to reduce allocation/deallocation overhead when appropriate."
  }
]