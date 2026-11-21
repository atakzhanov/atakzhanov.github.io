CHROME ?= google-chrome
CV_SRC_DIR := cv/html
PAGES_CV_DIR := me/cv
CV_PDFFILES := $(PAGES_CV_DIR)/aleksandr-takzhanov-cv-en.pdf $(PAGES_CV_DIR)/aleksandr-takzhanov-cv-ru.pdf
CHROME_FLAGS := --headless --no-sandbox --disable-gpu --no-pdf-header-footer

.PHONY: cv cv-clean start-pages

cv: $(CV_PDFFILES)

$(PAGES_CV_DIR):
	mkdir -p $@

$(PAGES_CV_DIR)/aleksandr-takzhanov-cv-%.pdf: $(CV_SRC_DIR)/%.html $(CV_SRC_DIR)/style.css | $(PAGES_CV_DIR)
	$(CHROME) $(CHROME_FLAGS) --print-to-pdf=$@ $<

cv-clean:
	rm -f $(CV_PDFFILES)

start-pages:
	./scripts/serve-pages.sh
