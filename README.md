# Formulario Lila

Clon de Typeform que permite a los usuarios de Sherpal agendar tutorías/

## Estructura del Proyecto

El proyecto sigue una estructura modular, distribuyendo los componentes, contexto (contexts), hooks y estilos en directorios específicos para facilitar su mantenimiento y comprensión.

.
├── components
│   ├── btn-container
│   │   ├── BtnContainer.module.css
│   │   └── BtnContainer.tsx
│   ├── dropdown-select
│   │   ├── DropdownSelect.module.css
│   │   └── DropdownSelect.tsx
│   ├── dropdown-select-option
│   │   ├── DropdownSelectOption.module.css
│   │   └── DropdownSelectOption.tsx
│   ├── error
│   │   ├── Error.module.css
│   │   └── Error.tsx
│   ├── index.ts
│   ├── main-content
│   │   └── MainContent.tsx
│   ├── progress-bar
│   │   ├── ProgressBar.module.css
│   │   └── ProgressBar.tsx
│   ├── question
│   │   ├── 0-Intro.tsx
│   │   ├── 1-NameInput.tsx
│   │   ├── 10-KindInput.tsx
│   │   ├── 11-AddressInput.tsx
│   │   ├── 12-TopicInput.tsx
│   │   ├── 13-Outro.tsx
│   │   ├── 2-CaretakerInput.tsx
│   │   ├── 3-SchoolInput.tsx
│   │   ├── 4-GradeInput.tsx
│   │   ├── 5-CourseInput.tsx
│   │   ├── 6-DayInput.tsx
│   │   ├── 7-TimeInput.tsx
│   │   ├── 8-PhoneInput.tsx
│   │   ├── 9-EmailInput.tsx
│   │   ├── Question.module.css
│   │   ├── Question.tsx
│   │   └── index.ts
│   ├── question-box-heading
│   │   ├── QuestionBoxHeading.module.css
│   │   └── QuestionBoxHeading.tsx
│   ├── question-box-para
│   │   ├── QuestionBoxPara.module.css
│   │   └── QuestionBoxPara.tsx
│   ├── question-input-number
│   │   ├── QuestionInputNumber.module.css
│   │   └── QuestionInputNumber.tsx
│   ├── question-input-schools
│   │   ├── QuestionInputSchools.module.css
│   │   └── QuestionInputSchools.tsx
│   ├── question-input-text
│   │   ├── QuestionInputText.module.css
│   │   └── QuestionInputText.tsx
│   └── question-num-heading
│   ├── QuestionNumHeading.module.css
│   └── QuestionNumHeading.tsx
├── constants
│   ├── COURSES.ts
│   ├── DAYS.ts
│   ├── GRADES.ts
│   ├── KINDS.ts
│   ├── TIMES.ts
│   ├── TOTAL_QUESTIONS.ts
│   └── index.ts
├── contexts
│   ├── index.ts
│   ├── questions-context.tsx
│   └── shared-states-context.tsx
├── hooks
│   ├── index.ts
│   ├── useHandleKeypress.ts
│   ├── useHandleScroll.ts
│   └── useSchools.ts
├── next.config.js
├── package.json
├── pages
│   ├── \_app.tsx
│   ├── \_document.tsx
│   ├── api
│   │   ├── hello.ts
│   │   └── send-email.ts
│   └── index.tsx
├── reducers
│   ├── actions
│   │   └── questionsActions.ts
│   ├── index.ts
│   ├── reducer-func
│   │   └── questionsReducerFunc.ts
│   └── states
│   └── questionsInitialState.ts
├── styles
│   ├── Home.module.css
│   └── globals.css
├── tsconfig.json
├── types
│   ├── contexts.ts
│   ├── index.ts
│   ├── misc.ts
│   └── question.ts
└── utils
├── index.ts
├── isNotValidEmail.ts
├── postData.ts
└── quicktimeFont.ts
