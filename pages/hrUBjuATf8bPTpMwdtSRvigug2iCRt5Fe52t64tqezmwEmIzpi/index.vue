<template>
  <div class="partner-card">
    <div class="partner-info">
      <h1>Devenir Partner</h1>
      <p>
        Vous cherchez à maximiser vos revenus tout en offrant un service
        exceptionnel à vos clients. Abrid vous offre une solution complète pour
        atteindre ces objectifs.
      </p>
    </div>

    <div class="partner-bg">
      <div class="revenue-card">
        <h2>Revenue</h2>
        <div class="revenue-stats">
          <div class="revenue-text">
            <h3>231 576 DHS</h3>
            <p>↑ 12% <span>from last month</span></p>
          </div>
          <div class="revenue-graph">
            <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 30 Q 25 10, 50 25 T 100 15"
                stroke="#8AFF00"
                stroke-width="4"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <img
        src="/assets/Toyota-yaris.png"
        alt="Toyota Yaris"
        class="car-image"
      />
    </div>

    <button class="whatsapp-button">
      <img src="/assets/Wtsp-logo.png" alt="Whatsapp" />
      Go to Whatsapp
    </button>
  </div>
</template>

<style>
.partner-card {
  color: #000;
  min-height: calc(100vh - 3rem);
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.partner-info {
  width: 100%;
  text-align: left;
  padding-top: 3.5rem;
  margin-bottom: 1rem;
}

.partner-info h1 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.partner-info p {
  font-size: 0.875rem;
  line-height: 1.5rem;
}

.partner-bg {
  background-color: #0c0c0c;
  padding: 1.25rem;
  margin-top: 0.5rem;
  border-radius: 1.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.revenue-card {
  border: 1px solid #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 0.75rem;
  width: 100%;
  text-align: left;
}

.revenue-card h2 {
  color: #a1a1a1;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.revenue-stats {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.revenue-text h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.revenue-text p {
  font-size: 0.875rem;
  font-weight: 500;
  color: #00ff84;
}

.revenue-text p span {
  color: #a1a1a1;
}

.revenue-graph {
  width: 4rem;
  height: 2.5rem;
}

.car-image {
  width: 100%;
  margin-top: 0.75rem;
  margin-bottom: -1.25rem;
  transform: scale(1);
  display: block;
  border-radius: 1rem;
}

.whatsapp-button {
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: #1a1a1a;
  border: 1px solid #2f2f2f;
  color: #00a859;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.whatsapp-button:hover {
  background-color: #222;
}

.whatsapp-button img {
  height: 2rem;
}
</style>
