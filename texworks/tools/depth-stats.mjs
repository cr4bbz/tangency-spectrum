const maxDepth = Number(process.argv[2] ?? 24);
const exponents = [1.25, 1.5, 2, 3];
const targetDepths = new Set([
  8, 12, 16, 20, maxDepth
].filter((depth) => depth <= maxDepth));

const sums = Array.from({ length: maxDepth + 1 }, () =>
  Array(exponents.length).fill(0)
);
const maxLength = Array(maxDepth + 1).fill(0);
const minLength = Array(maxDepth + 1).fill(Infinity);
const runSums = new Map();
const tailSums = new Map();
const tailCounts = new Map();
const thresholds = [0.25, 0.5, 1, 2, 4];

function addMapValue(map, key, value) {
  map.set(key, (map.get(key) ?? 0) + value);
}

function visit(depth, a, b, switches, last, tailLength) {
  const length = 2 / (a * b);
  for (let i = 0; i < exponents.length; i += 1) {
    sums[depth][i] += length ** exponents[i];
  }
  maxLength[depth] = Math.max(maxLength[depth], length);
  minLength[depth] = Math.min(minLength[depth], length);

  if (targetDepths.has(depth)) {
    const key = `${depth}:${switches}`;
    addMapValue(runSums, key, length ** 2);
    addMapValue(tailSums, `${depth}:${tailLength}`, length ** 2);
    for (const threshold of thresholds) {
      if (depth > 0 && depth * length >= threshold) {
        addMapValue(tailCounts, `${depth}:${threshold}`, 1);
      }
    }
  }

  if (depth === maxDepth) {
    return;
  }

  visit(
    depth + 1,
    a,
    a + b,
    switches + (last === "R" ? 1 : 0),
    "L",
    last === "L" ? tailLength + 1 : 1
  );
  visit(
    depth + 1,
    a + b,
    b,
    switches + (last === "L" ? 1 : 0),
    "R",
    last === "R" ? tailLength + 1 : 1
  );
}

visit(0, 1, 1, 0, "", 0);

for (let depth = 1; depth <= maxDepth; depth += 1) {
  const record = {
    depth,
    max_scaled: depth * maxLength[depth],
    min_log_scale: -Math.log(minLength[depth]) / depth,
    zeta: Object.fromEntries(
      exponents.map((s, index) => [
        String(s),
        {
          value: sums[depth][index],
          scaled: sums[depth][index] * depth ** s,
        },
      ])
    ),
  };
  console.log(JSON.stringify(record));
}

for (const depth of [...targetDepths].sort((a, b) => a - b)) {
  const bySwitches = [];
  for (let switches = 0; switches < depth; switches += 1) {
    const value = runSums.get(`${depth}:${switches}`) ?? 0;
    if (value > 0) {
      bySwitches.push({ switches, zeta_2_share: value / sums[depth][2] });
    }
  }
  const tails = Object.fromEntries(
    thresholds.map((threshold) => [
      threshold,
      tailCounts.get(`${depth}:${threshold}`) ?? 0,
    ])
  );
  const byTailLength = [];
  for (let tailLength = 1; tailLength <= depth; tailLength += 1) {
    const value = tailSums.get(`${depth}:${tailLength}`) ?? 0;
    if (value > 0) {
      byTailLength.push({
        tail_length: tailLength,
        zeta_2_share: value / sums[depth][2],
      });
    }
  }
  console.error(
    JSON.stringify({ depth, by_switches: bySwitches, by_tail_length: byTailLength, tails })
  );
}
