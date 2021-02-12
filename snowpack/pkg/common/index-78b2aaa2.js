function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

export { cubicOut as c };
