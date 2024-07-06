# Setting up
In this section, we will go through the steps to set up the library on different environments.

## Installation
It's pretty simple to install the library, you just need to add the repository and the dependency to your build file.

### Gradle (Kotlin DSL)
```kotlin
repositories {
    maven("https://maven.nookure.com")
}

dependencies {
    implementation("com.nookure.core:NookCore-Inventory:<version>")
}
```

### Gradle (Groovy DSL)
```groovy
repositories {
    maven { url 'https://maven.nookure.com' }
}

dependencies {
    implementation 'com.nookure.core:NookCore-Inventory:<version>'
}
```
### Maven

```xml
<repositories>
    <repository>
        <id>nookure</id>
        <url>https://maven.nookure.com</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.nookure.core</groupId>
        <artifactId>NookCore-Inventory</artifactId>
        <version>VERSION</version>
    </dependency>
</dependencies>
```