for (var i = 1; i < this.prime_count; ++i) {
    if (candidate % this.primes[i] == 0) return true;
}
document.write(i);