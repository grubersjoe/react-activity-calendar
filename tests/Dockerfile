FROM mcr.microsoft.com/playwright:v1.56.1-noble

# Install the default Ubuntu fonts, so that snapshots match.
# Not available in the Playwright image for some reason.
RUN apt update && apt -y install fonts-dejavu fonts-dejavu-mono