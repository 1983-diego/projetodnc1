function handleQuestion1() {
    const answer1 = document.getElementById('q1').value;
    const container = document.getElementById('additional-questions');

    container.innerHTML = '';

    if (answer1 === 'dados') {
        const question2 = document.createElement('div');
        question2.classList.add('form-group');
        question2.innerHTML = `
            <label for="q2-dados">Já possui conhecimentos em Python, SQL e NoSQL?</label>
            <select id="q2-dados" name="q2-dados" onchange="handleQuestion2Dados()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question2);
    } else if (answer1 === 'frontend') {
        const question2 = document.createElement('div');
        question2.classList.add('form-group');
        question2.innerHTML = `
            <label for="q2-frontend">Já possui conhecimentos em HTML, CSS e Javascript?</label>
            <select id="q2-frontend" name="q2-frontend" onchange="handleQuestion2Frontend()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question2);
    } else if (answer1 === 'backend') {
        const question2 = document.createElement('div');
        question2.classList.add('form-group');
        question2.innerHTML = `
            <label for="q2-backend">Já possui conhecimentos em alguma linguagem de back-end?</label>
            <select id="q2-backend" name="q2-backend" onchange="handleQuestion2Backend()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question2);
    }
}

function handleQuestion2Dados() {
    const answer2 = document.getElementById('q2-dados').value;
    const container = document.getElementById('additional-questions');

    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    if (answer2 === 'sim') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-dados">Você já tem algum projeto no github?</label>
            <select id="q3-dados" name="q3-dados" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else if (answer2 === 'nao') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-dados">Você sabia que pode começar com SQL e python?</label>
            <select id="q3-dados" name="q3-dados" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else {
        showFinalStep();
    }
}


function handleQuestion2Frontend() {
    const answer2 = document.getElementById('q2-frontend').value;
    const container = document.getElementById('additional-questions');

    // Remove perguntas adicionais anteriores
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    if (answer2 === 'sim') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-frontend">Você já tem projetos no github?</label>
            <select id="q3-frontend" name="q3-frontend" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else if (answer2 === 'nao') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-frontend">Você sabia que pode iniciar pelo HTML e CSS?</label>
            <select id="q3-frontend" name="q3-frontend" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else {
        showFinalStep();
    }
}

function handleQuestion2Backend() {
    const answer2 = document.getElementById('q2-backend').value;
    const container = document.getElementById('additional-questions');

    // Remove perguntas adicionais anteriores
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    if (answer2 === 'sim') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-backend">Você já tem experiência com essas linguagens?</label>
            <select id="q3-backend" name="q3-backend" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else if (answer2 === 'nao') {
        const question3 = document.createElement('div');
        question3.classList.add('form-group');
        question3.innerHTML = `
            <label for="q3-backend">Você sabia que pode iniciar por lógica de programação com portugol?</label>
            <select id="q3-backend" name="q3-backend" onchange="showFinalStep()">
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
        `;
        container.appendChild(question3);
    } else {
        showFinalStep();
    }
}

function showFinalStep() {
    const container = document.getElementById('additional-questions');

    // Remove a última pergunta, se houver
    if (container.children.length > 2) {
        container.removeChild(container.lastChild);
    }

    const question4 = document.createElement('div');
    question4.classList.add('form-group');
    question4.innerHTML = `
        <label for="q4">Você gostaria de aprender mais sobre esse assunto?</label>
        <select id="q4" name="q4" onchange="showSubmitButton()">
            <option value="">Selecione...</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
        </select>
    `;
    container.appendChild(question4);
    
}

function showAdvertise() {
    window.alert("Acesse: www.escoladnc.com.br")
}

function showSubmitButton() {
    const submitGroup = document.getElementById('submit-group');
    submitGroup.classList.remove('hidden');
    
}
