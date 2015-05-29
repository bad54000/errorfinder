<?php

namespace Conselio;

use PHPCI\Plugin;
use PHPCI\Builder;
use PHPCI\Model\Build;

// use Demorose\PHPCI\Plugin\Util\XUnitParser;

/**
* CasperJs - Allows CasperJS testing.
* @author       Emmanuel LEVEQUE <eleveque@hipay.com>
*/
class ErrorFinder implements Plugin
{
    /**
     * @var \PHPCI\Builder
     */
    protected $phpci;

    /**
     * @var \PHPCI\Model\Build
     */
    protected $build;

    protected $arguments = '';

    /**
     * Standard Constructor
     */
    public function __construct(Builder $phpci, Build $build, array $options = array())
    {
        $this->phpci = $phpci;
        $this->build = $build;

        $this->buildArgs($options);
    }

    /**
     * Run CasperJS tests.
     * @return bool
     */
    public function execute()
    {
        $this->phpci->logExecOutput(false);
        // var_dump($this->phpci);
        echo $this->phpci->buildPath;
        chdir($this->phpci->buildPath);

        file_get_contents('http://127.0.0.1:'.$this->interpolation_vars['%PHPCI_BUILD%']);

        // $this->phpci->logFailure($xUnitParser);

        $this->build->storeMeta('errorfinder-data', $errorlog);

        $this->phpci->logExecOutput(true);

        return true;
    }

    /**
     * Build an args string for PHPCS Fixer.
     * @param $options
     */
    public function buildArgs($options)
    {
        /**if (!empty($options['tests_path'])) {
            $this->tests_path = $options['tests_path'];
        }

        if (!empty($options['x_unit_file_path'])) {
            $this->x_unit_file_path = $options['x_unit_file_path'];
        }

        if (!empty($options['arguments'])) {
            $this->arguments= $options['arguments'];
        }*/
    }
}
