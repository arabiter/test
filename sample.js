for (var i = 1; i < this.prime_count; ++i) {
    if (candidate % this.primes[i] == 0) 
    document.write(i);
    return true;
}
