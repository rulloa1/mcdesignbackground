
        (() => {
            'use strict';
        const FORM_STATE_KEY = 'mcdesign_form_state';
        const listeners = []; // Track for cleanup

        // Helper: load form state from sessionStorage
        function loadFormState() {
            try {
                const saved = sessionStorage.getItem(FORM_STATE_KEY);
                return saved ? JSON.parse(saved) : { budget: '', type: '', name: '', email: '', step: 1 };
            } catch (e) {
                console.warn('Failed to load form state:', e);
                return { budget: '', type: '', name: '', email: '', step: 1 };
            }
        }

        // Helper: save form state to sessionStorage
        function saveFormState(state) {
            try {
                sessionStorage.setItem(FORM_STATE_KEY, JSON.stringify(state));
            } catch (e) {
                console.warn('Failed to save form state:', e);
            }
        }

        // Load saved state
        const savedState = loadFormState();
        let selectedBudget = savedState.budget;
        let selectedType = savedState.type;
        let currentStep = savedState.step;

        const steps = [
            document.getElementById('step-1'),
            document.getElementById('step-2'),
            document.getElementById('step-3'),
        ];
        const pips = document.querySelectorAll('.step-pip');

        // Cache frequently accessed elements
        const budgetGrid = document.getElementById('budget-grid');
        const typeGrid = document.getElementById('type-grid');
        const step1NextBtn = document.getElementById('step1-next');
        const step2BackBtn = document.getElementById('step2-back');
        const step2NextBtn = document.getElementById('step2-next');
        const step3BackBtn = document.getElementById('step3-back');
        const step3SubmitBtn = document.getElementById('step3-submit');
        const nameInput = document.getElementById('disc-name');
        const emailInput = document.getElementById('disc-email');
        const formContainer = document.querySelector('.multistep-form');
        const stepIndicator = document.getElementById('step-indicator');
        const formSuccess = document.getElementById('form-success');

        function showStep(n) {
            currentStep = n;
            steps.forEach((s, i) => s.classList.toggle('active', i === n - 1));
            pips.forEach((p, i) => {
                p.classList.remove('active', 'done');
                if (i < n - 1) p.classList.add('done');
                else if (i === n - 1) p.classList.add('active');
            });
            // Save step to sessionStorage
            saveFormState({ budget: selectedBudget, type: selectedType, name: nameInput.value, email: emailInput.value, step: n });
        }

        // Helper: attach listener and track for cleanup
        function on(el, event, handler) {
            if (el) {
                el.addEventListener(event, handler);
                listeners.push({ el, event, handler });
            }
        }

        // Helper: validate and display error state with accessibility announcements
        function setFieldError(input, isError) {
            const errorSpan = document.getElementById(input.getAttribute('aria-describedby'));
            if (isError) {
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
                if (errorSpan) errorSpan.style.display = 'block';
            } else {
                input.classList.remove('error');
                input.setAttribute('aria-invalid', 'false');
                if (errorSpan) errorSpan.style.display = 'none';
            }
        }

        // Restore saved form state visually
        function restoreSavedState() {
            if (selectedBudget) {
                const budgetBtn = budgetGrid.querySelector(`[data-value="${selectedBudget}"]`);
                if (budgetBtn) budgetBtn.classList.add('selected');
                step1NextBtn.disabled = false;
            }
            if (selectedType) {
                const typeBtn = typeGrid.querySelector(`[data-value="${selectedType}"]`);
                if (typeBtn) typeBtn.classList.add('selected');
                step2NextBtn.disabled = false;
            }
            if (savedState.name) nameInput.value = savedState.name;
            if (savedState.email) emailInput.value = savedState.email;
            showStep(currentStep);
        }

        // Step 1 &mdash; budget selection
        budgetGrid.querySelectorAll('.option-btn').forEach(btn => {
            on(btn, 'click', () => {
                budgetGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedBudget = btn.dataset.value;
                step1NextBtn.disabled = false;
                saveFormState({ budget: selectedBudget, type: selectedType, name: nameInput.value, email: emailInput.value, step: currentStep });
            });
        });
        on(step1NextBtn, 'click', () => showStep(2));

        // Step 2 &mdash; project type selection
        typeGrid.querySelectorAll('.option-btn').forEach(btn => {
            on(btn, 'click', () => {
                typeGrid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedType = btn.dataset.value;
                step2NextBtn.disabled = false;
                saveFormState({ budget: selectedBudget, type: selectedType, name: nameInput.value, email: emailInput.value, step: currentStep });
            });
        });
        on(step2BackBtn, 'click', () => showStep(1));
        on(step2NextBtn, 'click', () => showStep(3));

        // Step 3 &mdash; contact & submit with improved validation
        on(step3BackBtn, 'click', () => showStep(2));
        on(nameInput, 'input', () => {
            setFieldError(nameInput, false);
            saveFormState({ budget: selectedBudget, type: selectedType, name: nameInput.value, email: emailInput.value, step: currentStep });
        });
        on(emailInput, 'input', () => {
            setFieldError(emailInput, false);
            saveFormState({ budget: selectedBudget, type: selectedType, name: nameInput.value, email: emailInput.value, step: currentStep });
        });

        on(step3SubmitBtn, 'click', async () => {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = document.getElementById('disc-phone')?.value.trim() || '';
            const notes = document.getElementById('disc-notes')?.value.trim() || '';
            const hasNameError = !name;
            const hasEmailError = !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            setFieldError(nameInput, hasNameError);
            setFieldError(emailInput, hasEmailError);

            if (hasNameError || hasEmailError) return;

            // Disable button during submission
            step3SubmitBtn.disabled = true;
            step3SubmitBtn.textContent = 'Sending...';

            try {
                // Send form data to Formspree.io (free email service)
                // TO CONFIGURE: Visit https://formspree.io, create new form, replace form ID below
                const FORMSPREE_ID = 'mvgopoqr'; // Replace with your Formspree form ID
                const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        budget: selectedBudget,
                        projectType: selectedType,
                        notes,
                        timestamp: new Date().toISOString()
                    })
                });

                if (response.ok) {
                    // Success - show confirmation
                    formContainer.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
                    stepIndicator.style.display = 'none';
                    formSuccess.classList.add('visible');

                    // Clear form state after successful submission
                    setTimeout(() => {
                        nameInput.value = '';
                        emailInput.value = '';
                        document.getElementById('disc-phone').value = '';
                        document.getElementById('disc-notes').value = '';
                        selectedBudget = '';
                        selectedType = '';
                        sessionStorage.removeItem(FORM_STATE_KEY);
                    }, 100);
                } else {
                    // Network error
                    alert('Unable to send submission. Please try again or email directly.');
                    step3SubmitBtn.disabled = false;
                    step3SubmitBtn.textContent = 'Request Discovery Call →';
                }
            } catch (err) {
                // Fallback: show error and allow retry
                console.error('Form submission error:', err);
                alert('Unable to send submission. Please try again or email directly.');
                step3SubmitBtn.disabled = false;
                step3SubmitBtn.textContent = 'Request Discovery Call →';
            }
        });

        // Cleanup function for when form is destroyed
        function cleanup() {
            listeners.forEach(({ el, event, handler }) => {
                el.removeEventListener(event, handler);
            });
            listeners.length = 0;
        }

        // Restore saved state on load
        restoreSavedState();

        // Attach cleanup to window for potential SPA navigation
        window.formCleanup = cleanup;
    })();
    