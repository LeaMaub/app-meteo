Application Météo

C'est une application mobile construite avec React Native et Expo qui vous permet d'obtenir les prévisions météo de différentes villes. Elle vous permet d'entrer une ville et d'obtenir les prévisions météo pour les jours à venir.
Prérequis

Avant de commencer, assurez-vous d'avoir installé Node.js et npm (Node Package Manager) sur votre machine. Vous aurez également besoin d'installer le CLI d'Expo globalement sur votre machine à l'aide de la commande suivante:

    npm install -g expo-cli


Installation

    Clonez ce répertoire sur votre machine locale.
    Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances :

        npm install


Démarrage du projet

Pour démarrer le projet, exécutez la commande suivante dans le répertoire du projet :

    expo start

Cela lancera un serveur de développement local et ouvrira une page dans votre navigateur avec des informations sur le projet et les options pour exécuter l'application dans un émulateur ou sur un appareil physique.
Exécution de l'application

    Sur un appareil physique :
        - Installez l'application Expo Go sur votre smartphone.
        - Scannez le QR code apparaissant dans la page de votre navigateur ou dans la console de votre terminal après avoir lancé expo start.
    Sur un émulateur :
        - Installez Android Studio et configurez l'émulateur.
        - Depuis le terminal de commande d'Expo (qui s'ouvre lorsque vous exécutez expo start), cliquez sur "Run on Android device/emulator".


Fonctionnalités

L'application Météo a les fonctionnalités suivantes :

    - Rechercher les prévisions météo par ville.
    - Afficher les prévisions météo des prochains jours.
    - Changer de fond d'écran à chaque démarrage de l'application.