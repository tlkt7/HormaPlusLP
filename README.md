# Horma Landing Page

Landing page проект с React + Tailwind CSS на фронтенде и Django на бэкенде.

## Структура проекта

```
├── frontend/          # React + Vite + Tailwind CSS
└── backend/           # Django REST API
```

## Установка и запуск

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Фронтенд будет доступен на `http://localhost:5173`

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # На macOS/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Бэкенд будет доступен на `http://localhost:8000`

## Технологии

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Django, Django REST Framework, Django CORS Headers
