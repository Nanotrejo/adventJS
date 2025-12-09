from typing import List


def filter_gifts(gifts: List[str]) -> List[str]:
	return [g for g in gifts if '#' not in g]


def filter_gifts_fast(gifts: List[str]) -> List[str]:
	"""Micro-optimized version: use the C-implemented str.find bound as a local
	function to reduce attribute lookups. For large lists this is slightly
	faster while remaining readable.
	"""
	find = str.find
	return [g for g in gifts if find(g, '#') == -1]


if __name__ == '__main__':
	# Quick manual examples
	gifts1 = ['car', 'doll#arm', 'ball', '#train']
	print(filter_gifts(gifts1))  # ['car', 'ball']

	gifts2 = ['#broken', '#rusty']
	print(filter_gifts(gifts2))  # []

	gifts3: List[str] = []
	print(filter_gifts(gifts3))  # []

	# Quick micro-benchmark (only run for manual testing)
	import time
	large = ['toy'] * 100000 + ['bad#toy'] * 10000
	start = time.perf_counter()
	_ = filter_gifts(large)
	t1 = time.perf_counter() - start
	start = time.perf_counter()
	_ = filter_gifts_fast(large)
	t2 = time.perf_counter() - start
	print(f"filter_gifts: {t1:.4f}s, filter_gifts_fast: {t2:.4f}s")
