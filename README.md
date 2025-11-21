## Prérequis

- Python 3.10+
- Node.js 18+
- npm

## Démarrage

### Backend (FastAPI)

1. Créer un environnement virtuel :

```bash
python -m venv .venv
```

2. Activer l'environnement :

```bash
# Windows
.venv\Scripts\activate

# Mac/Linux
source .venv/bin/activate
```

3. Installer les dépendances :

```bash
pip install fastapi uvicorn pymongo pydantic
```

4. Lancer le serveur :

```bash
uvicorn main:app --reload
```

Le backend sera accessible sur http://localhost:8000

### Frontend (Next.js)

1. Aller dans le dossier frontend :

```bash
cd my-app
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

Le frontend sera accessible sur http://localhost:3000
