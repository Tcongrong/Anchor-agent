FROM mambaorg/micromamba:1.5.10

USER root
SHELL ["/bin/bash", "-lc"]

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      bash \
      ca-certificates \
      curl \
      git \
      procps \
      psmisc \
      rsync \
      tini \
    && rm -rf /var/lib/apt/lists/*

COPY environment.yml /tmp/environment.yml
RUN micromamba install -y -n base -f /tmp/environment.yml \
    && micromamba clean -a -y

ENV MAMBA_DOCKERFILE_ACTIVATE=1
ENV PATH=/opt/conda/bin:$PATH
ENV PYTHONUTF8=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/workspace/anchor-benchmark/baselines/src
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

WORKDIR /workspace/anchor-benchmark

COPY anchor-benchmark/package.json anchor-benchmark/package-lock.json ./
RUN npm ci \
    && npx playwright install --with-deps chromium \
    && npm cache clean --force

COPY anchor-benchmark /workspace/anchor-benchmark
COPY docker /workspace/docker

RUN chmod +x /workspace/docker/*.sh \
    && mkdir -p /workspace/anchor-benchmark/baselines/artifacts

WORKDIR /workspace/anchor-benchmark/baselines

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/workspace/docker/entrypoint.sh"]
