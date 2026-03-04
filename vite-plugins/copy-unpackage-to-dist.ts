import type { Plugin } from 'vite';
import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';

export interface CopyUnpackageToDistOptions {
    enable?: boolean;
    sourceDir?: string;
    targetDirName?: string;
    verbose?: boolean;
    logPrefix?: string;
}

const DEFAULT_OPTIONS: Required<CopyUnpackageToDistOptions> = {
    enable: true,
    sourceDir: 'unpackage',
    targetDirName: 'unpackage',
    verbose: true,
    logPrefix: '[copy-unpackage-to-dist]'
};

export function copyUnpackageToDist(options: CopyUnpackageToDistOptions = {}): Plugin {
    const config = { ...DEFAULT_OPTIONS, ...options };

    if (!config.enable) {
        console.log(`资源复制插件已禁用`);
        return {
            name: 'copy-unpackage-to-dist-disabled',
            apply: 'build',
            writeBundle() {}
        };
    }

    return {
        name: 'copy-unpackage-to-dist',
        apply: 'build',
        enforce: 'post',

        async writeBundle() {
            const { sourceDir, targetDirName, verbose, logPrefix } = config;

            try {
                const projectRoot = process.cwd();
                const sourcePath = path.resolve(projectRoot, sourceDir);

                const buildMode = process.env.NODE_ENV === 'production' ? 'build' : 'dev';
                const platform = process.env.UNI_PLATFORM || 'app';
                const targetPath = path.resolve(
                    projectRoot,
                    'dist',
                    buildMode,
                    platform,
                    targetDirName
                );

                const sourceExists = await fs.pathExists(sourcePath);
                if (!sourceExists) {
                    if (verbose) {
                        console.warn(`${logPrefix} 源目录不存在，跳过复制操作`);
                        console.warn(`${logPrefix} 源目录路径: ${sourcePath}`);
                    }
                    return;
                }

                const sourceFiles = await fs.readdir(sourcePath);
                if (sourceFiles.length === 0) {
                    if (verbose) {
                        console.warn(`${logPrefix} 源目录为空，跳过复制操作`);
                        console.warn(`${logPrefix} 源目录路径: ${sourcePath}`);
                    }
                    return;
                }

                await fs.ensureDir(targetPath);

                if (verbose) {
                    // console.log(`${logPrefix} 开始复制 src/unpackage -> dist...`);
                    // console.log(`${logPrefix} 源目录: ${sourcePath}`);
                    // console.log(`${logPrefix} 目标目录: ${targetPath}`);
                    // console.log(`${logPrefix} 构建模式: ${buildMode}`);
                    // console.log(`${logPrefix} 目标平台: ${platform}`);
                }

                await fs.copy(sourcePath, targetPath, {
                    overwrite: true,
                    errorOnExist: false,
                    preserveTimestamps: true
                });

                if (verbose) {
                    // console.log(`${logPrefix} ✅ 复制完成`);
                }
            } catch (error) {
                console.error(`${config.logPrefix} ❌ 复制失败:`, error);
            }
        }
    };
}

export function createCopyUnpackageToDistPlugin(
    enable: boolean = true,
    options: Omit<CopyUnpackageToDistOptions, 'enable'> = {}
): Plugin {
    return copyUnpackageToDist({ enable, ...options });
}
