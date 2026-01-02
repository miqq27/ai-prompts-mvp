// DOM Elements
const searchInput = document.getElementById('searchInput');
const promptsGrid = document.getElementById('promptsGrid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const filterChips = document.querySelectorAll('.filter-chip');

// State
let currentFilter = 'all';
let currentSearch = '';

// Initialize
function init() {
    updateStats();
    renderPrompts(promptsData);
    attachEventListeners();
}

// Update statistics
function updateStats() {
    const totalTools = new Set(promptsData.map(p => p.category)).size;
    document.getElementById('totalPrompts').textContent = promptsData.length;
    document.getElementById('totalTools').textContent = totalTools;
    updateVisibleCount(promptsData.length);
}

function updateVisibleCount(count) {
    document.getElementById('visiblePrompts').textContent = count;
}

// Render prompt cards
function renderPrompts(prompts) {
    if (prompts.length === 0) {
        promptsGrid.innerHTML = `
            <div class="no-results">
                <h3>No prompts found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        updateVisibleCount(0);
        return;
    }

    promptsGrid.innerHTML = prompts.map(prompt => `
        <div class="prompt-card" data-id="${prompt.id}">
            <h3>${prompt.title}</h3>
            <div class="prompt-category">${prompt.category}</div>
            <p class="prompt-description">${prompt.description}</p>
        </div>
    `).join('');

    updateVisibleCount(prompts.length);

    // Attach click handlers to cards
    document.querySelectorAll('.prompt-card').forEach(card => {
        card.addEventListener('click', () => {
            const promptId = parseInt(card.dataset.id);
            openModal(promptId);
        });
    });
}

// Filter and search logic
function filterPrompts() {
    let filtered = promptsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(prompt => {
            if (currentFilter === 'Code Assistants') {
                return prompt.category === 'Code Assistants';
            } else if (currentFilter === 'Search') {
                return prompt.category === 'Search';
            }
            return prompt.category === currentFilter;
        });
    }

    // Apply search
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(prompt => 
            prompt.title.toLowerCase().includes(searchLower) ||
            prompt.description.toLowerCase().includes(searchLower) ||
            prompt.category.toLowerCase().includes(searchLower) ||
            prompt.content.toLowerCase().includes(searchLower)
        );
    }

    renderPrompts(filtered);
}

// Modal functions
function openModal(promptId) {
    const prompt = promptsData.find(p => p.id === promptId);
    if (!prompt) return;

    modalTitle.textContent = prompt.title;
    modalCategory.textContent = prompt.category;
    modalContent.textContent = prompt.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
function attachEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        filterPrompts();
    });

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.category;
            filterPrompts();
        });
    });

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Start the app
init();