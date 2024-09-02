document.addEventListener('DOMContentLoaded', function() {
    // IDs das sections
    const sections = [
        'sobre__mim__container',
        'formcacao__container',
        'portifolio__container',
        'contato__container'
    ];

    // Função para ocultar todas as sections
    function hideAllSections() {
        sections.forEach(function(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none'; // Aplicando display: none
            }
        });
    }

    // Função para mostrar uma section
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block'; // Mostra a section
        }
    }

    // Esconder todas as sections ao carregar a página
    hideAllSections();

    // Adicionando eventos de clique
    document.getElementById('chamar__sobre_mim').addEventListener('click', function() {
        hideAllSections();
        showSection('sobre__mim__container');
    });

    document.getElementById('chamar__formacao').addEventListener('click', function() {
        hideAllSections();
        showSection('formcacao__container');
    });

    document.getElementById('chamar__portfolio').addEventListener('click', function() {
        hideAllSections();
        showSection('portifolio__container');
    });

    document.getElementById('chamar_contato').addEventListener('click', function() {
        hideAllSections();
        showSection('contato__container');
    });
});
